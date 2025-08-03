
const express = require("express");
const router = express.Router();
const { saveEsewaPayment, getPaymentByOrderId } = require("../controllers/paymentController");

router.post("/save", saveEsewaPayment);
router.get("/receipt/:orderId", getPaymentByOrderId);

module.exports = router;

