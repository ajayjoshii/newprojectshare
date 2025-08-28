const express = require("express");
const router = express.Router();
const { saveEsewaPayment, getPaymentByOrderId, getAllPayments } = require("../controllers/paymentController");

// save payment after success
router.post("/save", saveEsewaPayment);

// fetch receipt
router.get("/receipt/:orderId", getPaymentByOrderId);

// admin: fetch all payments
router.get("/", getAllPayments);

module.exports = router;
