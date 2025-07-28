// backend/routes/khalti.route.js
const express = require("express");
const { verifyKhaltiPayment } = require("../controllers/khalti.controller");

const router = express.Router();

router.post("/verify", verifyKhaltiPayment);

module.exports = router;
