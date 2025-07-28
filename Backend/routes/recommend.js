const express = require("express");
const Order = require("../models/Order");
const router = express.Router();

router.get("/", async (req, res) => {
  const { province } = req.query;
  if (!province) return res.json({ recommendedItems: [] });

  try {
    const orders = await Order.find({ province }).sort({ createdAt: -1 }).limit(10);
    const allItems = orders.flatMap((o) => o.items);
    const uniqueItemsMap = new Map();
    allItems.forEach((item) => {
      if (!uniqueItemsMap.has(item.id)) {
        uniqueItemsMap.set(item.id, item);
      }
    });
    const recommendedItems = Array.from(uniqueItemsMap.values()).slice(0, 8);
    res.json({ recommendedItems });
  } catch (err) {
    console.error(err);
    res.status(500).json({ recommendedItems: [] });
  }
});

module.exports = router;
