import { Router } from "express";
import { getDashboardStats } from "../controllers/dashboard.controller";
import { protect } from "../middleware/auth.middleware";
import { authorize } from "../middleware/role.middleware";

const router = Router()

router.get(
    "/stats",
    protect,
    authorize("admin"),
    getDashboardStats
)

export default router;