import { Response, Request } from "express";
import Product from "../models/Product";
import {
  productSchema,
  updateProductSchema,
} from "../validators/product.validator";
import { AuthRequest } from "../middleware/auth.middleware";
import mongoose from "mongoose";
import { uploadImage } from "../utils/uploadImage";
// import { uploadImage } from "../utils/uploadImage";
import Category from "../models/Category";

export const createProduct = async (
  req: AuthRequest,
  res: Response,
): Promise<void> => {
  try {
    // Validate request
    const result = productSchema.safeParse(req.body);

    if (!result.success) {
      res.status(400).json({
        success: false,
        errors: result.error.flatten().fieldErrors,
      });
      return;
    }

    const { name, description, price, stock, category } = result.data;

    let imageUrl = "";

    if (req.file) {
      const uploadedImage = await uploadImage(req.file.buffer);
      imageUrl = uploadedImage.secure_url;
    }

    const categoryDoc = await Category.findById(category);

    if (!categoryDoc) {
      res.status(404).json({
        success: false,
        message: "Category not found",
      });
      return;
    }

    // Create product
   const product = await Product.create({
  name,
  description,
  price,
  stock,
  category: categoryDoc._id,
  image: imageUrl,
  supplier: req.user!.id,
});

const populatedProduct = await Product.findById(product._id)
  .populate("supplier", "name email")
  .populate("category", "name");

res.status(201).json({
  success: true,
  message: "Product created successfully",
  product: populatedProduct,
});

  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

export const getProducts = async (
  req: Request,
  res: Response,
): Promise<void> => {
  try {
    const {
      search,
      category,
      minPrice,
      maxPrice,
      page = "1",
      limit = "10",
      sort = "createdAt",
    } = req.query;

    const query: any = {};

    // Search by product name
    if (search) {
      query.name = {
        $regex: search,
        $options: "i",
      };
    }

    // Filter by category
    if (category) {
      query.category = category;
    }

    // Filter by price range
    if (minPrice || maxPrice) {
      query.price = {};

      if (minPrice) {
        query.price.$gte = Number(minPrice);
      }

      if (maxPrice) {
        query.price.$lte = Number(maxPrice);
      }
    }

    const pageNumber = Number(page);
    const limitNumber = Number(limit);

    let sortOption = {};

    switch (sort) {
      case "price_asc":
        sortOption = { price: 1 };
        break;

      case "price_desc":
        sortOption = { price: -1 };
        break;

      case "newest":
        sortOption = { createdAt: -1 };
        break;

      case "oldest":
        sortOption = { createdAt: 1 };
        break;

      case "name_asc":
        sortOption = { name: 1 };
        break;

      case "name_desc":
        sortOption = { name: -1 };
        break;

      default:
        sortOption = { createdAt: -1 };
    }

    const products = await Product.find(query)
      .populate("supplier", "name email")
      .populate("category", "name")
      .sort(sortOption)
      // .sort({ [sort as string]: 1 })
      .skip((pageNumber - 1) * limitNumber)
      .limit(limitNumber);

    const totalProducts = await Product.countDocuments(query);

    res.status(200).json({
      success: true,
      totalProducts,
      currentPage: pageNumber,
      totalPages: Math.ceil(totalProducts / limitNumber),
      products,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

export const getProductById = async (
  req: Request,
  res: Response,
): Promise<void> => {
  try {
    const id = Array.isArray(req.params.id) ? req.params.id[0] : req.params.id;

    // Validate MongoDB ObjectId
    if (!mongoose.Types.ObjectId.isValid(id)) {
      res.status(400).json({
        success: false,
        message: "Invalid Product ID",
      });
      return;
    }

    const product = await Product.findById(id)
      .populate("supplier", "name email role")
      .populate("category", "name");

    if (!product) {
      res.status(404).json({
        success: false,
        message: "Product not found",
      });
      return;
    }

    res.status(200).json({
      success: true,
      product,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

// *************Update Product*************

export const updateProduct = async (
  req: AuthRequest,
  res: Response,
): Promise<void> => {
  try {
    const result = updateProductSchema.safeParse(req.body);

    if (!result.success) {
      res.status(400).json({
        success: false,
        errors: result.error.flatten().fieldErrors,
      });
      return;
    }

   const id = Array.isArray(req.params.id)
  ? req.params.id[0]
  : req.params.id;

if (!mongoose.Types.ObjectId.isValid(id)) {
  res.status(400).json({
    success: false,
    message: "Invalid Product ID",
  });
  return;
}

    const product = await Product.findById(id);

    if (!product) {
      res.status(404).json({
        success: false,
        message: "Product not found",
      });
      return;
    }

    const isOwner = product.supplier.toString() === req.user!.id;

    const isAdmin = req.user!.role === "admin";

    if (!isOwner && !isAdmin) {
      res.status(403).json({
        success: false,
        message: "You can update only your products",
      });
      return;
    }

const updatedProduct = await Product.findByIdAndUpdate(
  id,
  result.data,
  {
    new: true,
    runValidators: true,
  }
)
.populate("supplier", "name email")
.populate("category", "name");

    res.status(200).json({
      success: true,
      message: "Product updated successfully",
      product: updatedProduct,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

// *************Delete Product*************
export const deleteProduct = async (
  req: AuthRequest,
  res: Response,
): Promise<void> => {
  try {

  const id = Array.isArray(req.params.id)
  ? req.params.id[0]
  : req.params.id;

if (!mongoose.Types.ObjectId.isValid(id)) {
  res.status(400).json({
    success: false,
    message: "Invalid Product ID",
  });
  return;
}

const product = await Product.findById(id);


    if (!product) {
      res.status(404).json({
        success: false,
        message: "Product not found",
      });
      return;
    }

    const isOwner = product.supplier.toString() === req.user!.id;

    const isAdmin = req.user!.role === "admin";

    if (!isOwner && !isAdmin) {
      res.status(403).json({
        success: false,
        message: "You can delete only your own products",
      });
      return;
    }

    await product.deleteOne();

    res.status(200).json({
      success: true,
      message: "Product deleted successfully",
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};
