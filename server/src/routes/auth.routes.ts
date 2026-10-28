import { Router } from "express";
import { loginUser, registerUser } from "../controllers/auth.controller";

import { AuthRequest, protect } from "../middleware/auth.middleware";
import { authorize } from "../middleware/role.middleware";

const router = Router();

router.post("/register", registerUser);

router.post("/login", loginUser);

router.get("/profile", protect, (req: AuthRequest, res) => {
  res.json({
    success: true,
    user: req.user,
  });
});

router.get("/admin", protect, authorize("admin"), (req, res) => {
  res.json({
    success: true,
    message: "Welcome Admin",
  });
});

router.get("/supplier", protect, authorize("supplier"), (req, res) => {
  res.json({
    success: true,
    message: "Welcome Supplier",
  });
});

router.get("/retailer", protect, authorize("retailer"), (req, res) => {
  res.json({
    success: true,
    message: "Welcome Retailer",
  });
});

router.get(
  "/dashboard",
  protect,
  authorize("admin", "supplier"),
  (req, res) => {
    res.json({
      message: "Dashboard Access",
    });
  },
);

console.log("Reached Route file");

export default router;
