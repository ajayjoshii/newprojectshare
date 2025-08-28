// routes/cart.js
const express = require("express");
const router = express.Router();
const Order = require("../models/Order");
const User = require("../models/User");
router.post("/add", async (req, res) => {
  const { userId, itemId, name, price, quantity } = req.body;
  try {
    // Save to database (MongoDB logic here)
    res.json({ success: true, message: "Item added to cart" });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

router.post("/submit", async (req, res) => {
  try {
    const { userId, items, totalPrice, province, name, email } = req.body;

    if (!userId || !items || !items.length) {
      return res.status(400).json({ message: "Incomplete order data" });
    }

    const order = new Order({
      userId,
      items,
      totalPrice,
      province,
      name,
      email,
      status: "pending",
      paymentStatus: "pending",
      createdAt: new Date(),
    });

    await order.save();

    // Optionally push order reference to user
    if (userId) {
      await User.findByIdAndUpdate(userId, { $push: { orders: order._id } });
    }

    res.status(201).json({ success: true, order });
  } catch (err) {
    console.error("Error saving order:", err);
    res.status(500).json({ success: false, message: "Server error saving order" });
  }
});

module.exports = router;
