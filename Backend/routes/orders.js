// const express = require("express");
// const Order = require("../models/Order");
// const router = express.Router();

// router.post("/submit", async (req, res) => {
//   try {
//     const { userId, name, email, province, items } = req.body;
//     if (!userId || !name || !email || !items || !province) {
//       return res.status(400).json({ message: "Missing order details" });
//     }

//     const newOrder = await Order.create({
//       userId,
//       name,
//       email,
//       province,
//       items,
//     });

//     res.json({ message: "Order submitted", orderId: newOrder._id });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ message: "Failed to submit order" });
//   }
// });

// module.exports = router;


// routes/orders.js
const express = require("express");
const router = express.Router();
const Order = require("../models/Order");
const verifyToken = require("../middleware/auth"); // JWT auth middleware

// GET /api/orders/:orderId
router.get("/:orderId", verifyToken, async (req, res) => {
  try {
    const order = await Order.findOne({
      _id: req.params.orderId,
      userId: req.user.id,
    });
    if (!order) return res.status(404).json({ message: "Order not found" });

    res.json(order);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
