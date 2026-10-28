import { z } from "zod";

export const productSchema = z.object({
  name: z.string().min(3, "Product name must be at least 3 characters"),

  description: z.string().min(10, "Description must be at least 10 characters"),

  price: z.coerce.number().positive("Price must be greater than 0"),

  stock: z.coerce.number().min(0, "Stock cannot be negative"),

 category: z.string().min(1, "Category ID is required"),

  image: z.string().optional(),
});

export type ProductInput = z.infer<typeof productSchema>;

export const updateProductSchema = z.object({
  name: z.string().min(3).optional(),

  description: z.string().min(10).optional(),

  price: z.coerce.number().positive().optional(),

  stock: z.coerce.number().min(0).optional(),

  category: z.string().optional(),

  image: z.string().optional(),
});