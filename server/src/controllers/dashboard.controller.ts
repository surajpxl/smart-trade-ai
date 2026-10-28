import { Request, Response } from "express";
import User from "../models/User";
import Product from "../models/Product";
import Category from "../models/Category";
import Order from "../models/Order";

export  const getDashboardStats = async(
    req: Request,
    res: Response
): Promise<void> => {
    try {
        const [
            totalUsers,
            totalProducts,
            totalCategories,
            totalOrders,

            totalRetailers,
            totalSuppliers,
            totalAdmins,

            revenueResult,

            ordersByStatus,

            latestOrders,

            topSellingProducts,

            monthlyRevenue,

        ] = await Promise.all([
            User.countDocuments(),
            Product.countDocuments(),
            Category.countDocuments(),
            Order.countDocuments(),

            User.countDocuments({ role: "retailer" }),
            User.countDocuments({ role: "supplier" }),
            User.countDocuments({ role: "admin" }),

             Order.aggregate([
                {
                $match: {
                    status: {
                    $ne: "cancelled",
                    },
                },
                },
                {
                $group: {
                    _id: null,
                    totalRevenue: {
                    $sum: "$totalPrice",
                    },
                  },
                },
            ]),

            Order.aggregate([
                {
                    $group: {
                        _id: "$status",
                        count: {
                            $sum: 1,
                        },
                    },
                },
                {
                    $sort: {
                        _id: 1,
                    },
                },
            ]),

           

            Order.find()
            .populate("retailer", "name email")
            .populate("supplier", "name email")
            .populate("product", "name image")
            .sort({ createdAt: -1})
            .limit(10),

             Order.aggregate([
                {
                    $match: {
                        status: "delivered",
                    },
                },
                {
                    $group: {
                        _id: "$product",

                        totalSold:{
                            $sum: "$quantity",
                        },

                        revenue: {
                            $sum: "$totalPrice"
                        },
                    },
                },
                {
                    $lookup: {
                        from: "products",
                        localField: "_id",
                        foreignField: "_id",
                        as: "product",
                    },
                },

                {
                    $unwind: "$product",
                },

                {
                    $project: {
                        _id: 0,

                        productId: "$product._id",

                        name: "$product.name",

                        image: "$product.image",

                        totalSold: 1,

                        revenue: 1,
                    },
                },

                {
                    $sort: {
                        totalSold: -1,
                    },
                },

                {
                    $limit:10,
                },
            ]),

                Order.aggregate([
                    {
                    $match: {
                        status: "delivered",
                    },
                    },

                    {
                    $group: {
                        _id: {
                        year: {
                            $year: "$createdAt",
                        },
                        month: {
                            $month: "$createdAt",
                        },
                        },

                        revenue: {
                        $sum: "$totalPrice",
                        },

                        orders: {
                        $sum: 1,
                        },
                    },
                    },

                    {
                    $sort: {
                        "_id.year": 1,
                        "_id.month": 1,
                    },
                    },
                ]),
                

   ]);

        const orderStatusStats = {
            pending: 0,
            confirmed: 0,
            shipped: 0,
            delivered: 0,
            cancelled: 0,
            };

            ordersByStatus.forEach((item) => {
            orderStatusStats[item._id as keyof typeof orderStatusStats] = item.count;
     });

     const months = [
  "",
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const monthlyRevenueChart = monthlyRevenue.map((item) => ({
  year: item._id.year,
  month: months[item._id.month],
  revenue: item.revenue,
  orders: item.orders,
}));

        const totalRevenue = 
        revenueResult.length > 0
        ? revenueResult[0].totalRevenue
        : 0;

        res.status(200).json({
            success: true,
            stats: {
                totalUsers,

                totalRetailers,

                totalSuppliers,

                totalAdmins,

                totalProducts,

                totalCategories,

                totalOrders,

                totalRevenue,
            },

           orderStatusStats,

           latestOrders,

           topSellingProducts,

            monthlyRevenue: monthlyRevenueChart,
        });

    } catch (error) {
        console.error(error);

        res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
    }
}