import { Router } from "express";
import { cancelOrder, getMyOrders, getSupplierOrders, placeOrder, updateOrderStatus } from "../controllers/order.controller";
import { protect,  } from "../middleware/auth.middleware";
import { authorize } from "../middleware/role.middleware";

const router = Router()

//Retailer can replace orders
// Retailer can place orders
router.post(
  "/",
  protect,
  authorize("retailer"),
  placeOrder
);


router.get(
    "/my-orders",
    protect,
    authorize("retailer"),
    getMyOrders
)

router.get(
    "/supplier-orders",
    protect,
    authorize("supplier"),
    getSupplierOrders
)

router.patch(
    "/:id/status",
    protect,
    authorize("supplier"),
    updateOrderStatus
)

router.patch(
    "/:id/cancel",
    protect,
    authorize("retailer"),
    cancelOrder
)

export default router;