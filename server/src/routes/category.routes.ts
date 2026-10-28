import { Router } from "express";

import { createCategory, deleteCategory, getCategories, getCategoryById, updateCategory } from "../controllers/category.controller";

import { protect } from "../middleware/auth.middleware";
import { authorize } from "../middleware/role.middleware";

const router = Router()

router.post(
    "/",
    protect,
    authorize("admin"),
    createCategory
)

router.get("/", getCategories)

router.get("/:id", getCategoryById)

router.put(
    "/:id",
    protect,
    authorize("admin"),
    updateCategory
)

router.delete(
    "/:id",
    protect,
    authorize("admin"),
    deleteCategory
)

export default router;