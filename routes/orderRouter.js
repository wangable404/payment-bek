const Router = require("express");
const router = new Router();
const orderController = require("../controllers/orderController");
const authMiddleware = require("../middleware/middleware");

router.get("/webhook", orderController.handlePaymentWebhook);

router.post("/", orderController.createOrder);

router.get("/", authMiddleware, orderController.getAllOrders);

router.get(
  "/:orderId/status",
  orderController.checkPaymentStatus,
);

router.get("/:id", authMiddleware, orderController.getOrderById);

router.put(
  "/:id",
  authMiddleware,
  orderController.updateOrder,
);

router.delete(
  "/:id",
  authMiddleware,
  orderController.deleteOrder,
);

module.exports = router;
