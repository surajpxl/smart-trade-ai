import {z} from "zod";

export const createOrderSchema = z.object({
    productId: z.string().min(1, "Product ID is required"),

    quantity: z
    .number()
    .int()
    .positive("Quantity must be greater than 0"),
});


export const updateOrderStatusSchema = z.object({
  status: z.enum([
    "confirmed",
    "shipped",
    "delivered",
    "cancelled",
  ]),
});