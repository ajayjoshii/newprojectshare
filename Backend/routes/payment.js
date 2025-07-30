// routes/payment.js
const express = require("express");
const router = express.Router();

router.post("/checkout", async (req, res) => {
  const { items, total } = req.body;

  // Logic: e.g., send to Khalti/eSewa or any payment gateway

  res.json({ success: true, message: "Payment initiated", redirectUrl: "/payment-gateway" });
});

module.exports = router;
