const express = require("express");

const router = express.Router();

const orderControllers = require("../controllers/orders");

router.get("/orders", orderControllers.getOrders);
router.post("/order", orderControllers.postOrders);


module.exports = router;
