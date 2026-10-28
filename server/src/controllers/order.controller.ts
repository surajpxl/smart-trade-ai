import { Response } from "express";
import mongoose from "mongoose";

import Order from "../models/Order";
import Product from "../models/Product";
import { AuthRequest } from "../middleware/auth.middleware";
import {
  createOrderSchema,
  updateOrderStatusSchema,
} from "../validators/order.validator";
import { success } from "zod";
import { read } from "node:fs";

export const placeOrder = async (
  req: AuthRequest,
  res: Response,
): Promise<void> => {
  try {
    const result = createOrderSchema.safeParse(req.body);

    if (!result.success) {
      res.status(400).json({
        success: false,
        errors: result.error.flatten().fieldErrors,
      });
      return;
    }

    const { productId, quantity } = result.data;

    if (!mongoose.Types.ObjectId.isValid(productId)) {
      res.status(400).json({
        success: false,
        message: "Invalid Product ID",
      });
      return;
    }

    const product = await Product.findById(productId);

    if (!product) {
      res.status(404).json({
        success: false,
        message: "Product not found",
      });
      return;
    }

    if (product.stock < quantity) {
      res.status(400).json({
        success: false,
        message: "Insufficient stock",
      });
      return;
    }

    const totalPrice = product.price * quantity;

    product.stock -= quantity;

    await product.save();

    const order = await Order.create({
      retailer: req.user!.id,

      supplier: product.supplier,

      product: product._id,

      quantity,

      totalPrice,
    });

    const populatedOrder = await Order.findById(order._id)
      .populate("retailer", "name email")
      .populate("supplier", "name email")
      .populate("product", "name price image");

    res.status(201).json({
      success: true,
      message: "Order placed successfully",
      order: populatedOrder,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

export const getMyOrders = async (
  req: AuthRequest,
  res: Response,
): Promise<void> => {
  try {
    const orders = await Order.find({
      retailer: req.user!.id,
    })
      .populate("product", "name price image")
      .populate("supplier", "name email")
      .sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      totalOrders: orders.length,
      orders,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

export const getSupplierOrders = async (
  req: AuthRequest,
  res: Response,
): Promise<void> => {
  try {
    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 10;

    const orders = await Order.find({
      supplier: req.user!.id,
    })
      .populate("retailer", "name email")
      .populate("product", "name price image")
      //         .populate({
      //   path: "product",
      //   select: "name price image category",
      //   populate: {
      //     path: "category",
      //     select: "name",
      //   },
      // })
      .sort({ createdAt: -1 })
      .skip((page - 1) * limit)
      .limit(limit);

    const totalOrders = await Order.countDocuments({
      supplier: req.user!.id,
    });

    res.status(200).json({
      success: true,
      totalOrders,
      currentPage: page,
      totalPages: Math.ceil(totalOrders / limit),
      orders,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Internal Serve Error",
    });
  }
};

export const updateOrderStatus = async (
  req: AuthRequest,
  res: Response,
): Promise<void> => {
  try {
    const result = updateOrderStatusSchema.safeParse(req.body);

    if (!result.success) {
      res.status(400).json({
        success: false,
        errors: result.error.flatten().fieldErrors,
      });
      return;
    }

    const id = Array.isArray(req.params.id) ? req.params.id[0] : req.params.id;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      res.status(400).json({
        success: false,
        message: "Invalid Order ID",
      });
      return;
    }

    const order = await Order.findById(id);

    if (!order) {
      res.status(404).json({
        success: false,
        message: "Order not found",
      });
      return;
    }

    // Supplier can update only their own orders
    if (order.supplier.toString() !== req.user!.id) {
      res.status(403).json({
        success: false,
        message: "Access denied",
      });
      return;
    }

    order.status = result.data.status;

    await order.save();

    const updatedOrder = await Order.findById(order._id)
      .populate("retailer", "name email")
      .populate("supplier", "name email")
      .populate("product", "name price image");

    res.status(200).json({
      success: true,
      message: "Order status updated successfully",
      order: updatedOrder,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

export const cancelOrder = async (
  req: AuthRequest,
  res: Response,
): Promise<void> => {
  try {
    const id = Array.isArray(req.params.id) ? req.params.id[0] : req.params.id;

    if (!id || !mongoose.Types.ObjectId.isValid(id)) {
      res.status(400).json({
        success: false,
        message: "Invalid Order ID",
      });
      return;
    }

    const order = await Order.findById(id);

    if(!order){
        res.status(404).json({
            success: false,
            message: "Order not found",
        })
        return;
    }

    // Retailer can cancel onky their own orders
    if(order.retailer.toString() !== req.user!.id) {
        res.status(403).json({
            success: false,
            message: "Access denied",
        })
        return;
    }

    // Only pending orders can be cancelled
    if(order.status !== "pending"){
        res.status(400).json({
            success: false,
            message: "Only pending orders can be cancelled"
        })
        return;
    }

    // Restore stock
    const product = await Product.findById(order.product);

    if(product){
        product.stock += order.quantity;
        await product.save();
    }

    order.status = "cancelled"
    await order.save()

    const cancelledOrder = await Order.findById(order._id)
    .populate("retailer", "name email")
    .populate("supplier", "name email")
    .populate("product", "name price image")

    res.status(200).json({
        success: true,
        message: "Order cancelled successfully",
        order: cancelledOrder
    })

  } catch (error) {
    console.error(error)

    res.status(500).json({
        success: false,
        message: "Internal Server Error",
    })
  }
};
