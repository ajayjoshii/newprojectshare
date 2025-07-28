const express = require("express");
const Order = require("../models/Order");
const router = express.Router();

router.post("/submit", async (req, res) => {
  try {
    const { userId, name, email, province, items } = req.body;
    if (!userId || !name || !email || !items || !province) {
      return res.status(400).json({ message: "Missing order details" });
    }

    const newOrder = await Order.create({
      userId,
      name,
      email,
      province,
      items,
    });

    res.json({ message: "Order submitted", orderId: newOrder._id });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to submit order" });
  }
});

module.exports = router;
