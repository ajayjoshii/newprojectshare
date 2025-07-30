// routes/cart.js
const express = require("express");
const router = express.Router();

router.post("/add", async (req, res) => {
  const { userId, itemId, name, price, quantity } = req.body;
  try {
    // Save to database (MongoDB logic here)
    res.json({ success: true, message: "Item added to cart" });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

module.exports = router;
