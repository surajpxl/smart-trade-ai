import { Router } from "express";

import { createProduct, deleteProduct, getProductById, updateProduct } from "../controllers/product.controller";
import { protect } from "../middleware/auth.middleware";
import { authorize } from "../middleware/role.middleware";
import { getProducts } from "../controllers/product.controller";
import upload from "../middleware/upload.midleware";

const router = Router();

router.post(
  "/",
  protect,
  authorize("supplier", "admin"),
  upload.single("image"),
  createProduct
);

router.get("/", getProducts);

router.get("/:id", getProductById)

router.put(
  "/:id", 
  protect,
  authorize("supplier", "admin"),
  updateProduct
)

router.delete(
  "/:id",
  protect,
  authorize("supplier", "admin"),
  deleteProduct
)
export default router;