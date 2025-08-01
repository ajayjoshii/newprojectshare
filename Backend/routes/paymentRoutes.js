// // // // // // // const express = require('express');
// // // // // // // const router = express.Router();
// // // // // // // const axios = require("axios");

// // // // // // // // const { savePayment, getPaymentByOrderId } = require('../controllers/paymentController');
// // // // // // // // const authMiddleware = require('../middleware/authMiddleware'); // JWT auth middleware

// // // // // // // // // Save payment info after success
// // // // // // // // router.post('/save-payment', authMiddleware, savePayment);

// // // // // // // // // Get payment by orderId for receipt display
// // // // // // // // router.get('/:orderId', authMiddleware, getPaymentByOrderId);







// // // // // // // router.post("/verify", async (req, res) => {
// // // // // // //   try {
// // // // // // //     const { amount, transaction_uuid, product_code } = req.body;

// // // // // // //     const response = await axios.post("https://rc-epay.esewa.com.np/api/epay/transaction", {
// // // // // // //       amount,
// // // // // // //       transaction_uuid,
// // // // // // //       product_code,
// // // // // // //     }, {
// // // // // // //       headers: {
// // // // // // //         Authorization: `Token ${process.env.ESEWA_SECRET_KEY}`,
// // // // // // //       },
// // // // // // //     });

// // // // // // //     if (response.data.status === "COMPLETE") {
// // // // // // //       const payment = new Payment({
// // // // // // //         transaction_uuid,
// // // // // // //         product_code,
// // // // // // //         amount,
// // // // // // //         user: req.userId || "guest",
// // // // // // //         status: "SUCCESS",
// // // // // // //       });

// // // // // // //       await payment.save();

// // // // // // //       // ✅ Redirect to frontend success page
// // // // // // //       return res.redirect(`http://localhost:5173/payment-success?transaction_uuid=${transaction_uuid}`);
// // // // // // //     }

// // // // // // //     res.status(400).json({ success: false, message: "Payment not completed" });
// // // // // // //   } catch (error) {
// // // // // // //     console.error("Verification error:", error.response?.data || error.message);
// // // // // // //     res.status(500).json({ success: false, message: "Verification failed" });
// // // // // // //   }
// // // // // // // });


// // // // // // // // GET /api/payment/receipt/:transactionId
// // // // // // // router.get("/receipt/:transactionId", async (req, res) => {
// // // // // // //   try {
// // // // // // //     const payment = await Payment.findOne({ transaction_uuid: req.params.transactionId }).populate("user");

// // // // // // //     if (!payment) {
// // // // // // //       return res.status(404).json({ message: "Payment not found" });
// // // // // // //     }

// // // // // // //     res.json({ payment });
// // // // // // //   } catch (err) {
// // // // // // //     console.error("Get receipt error:", err);
// // // // // // //     res.status(500).json({ message: "Error fetching payment receipt" });
// // // // // // //   }
// // // // // // // });

// // // // // // // module.exports = router;


// // // // // // const express = require("express");
// // // // // // const router = express.Router();
// // // // // // const Payment = require("../models/paymentModel");
// // // // // // const { verifyEsewaPayment } = require("../models/esewa");
// // // // // // const authMiddleware = require("../middleware/auth");


// // // // // // router.post("/save", async (req, res) => {
// // // // // //   try {
// // // // // //     const { user, items, totalAmount, province, transaction_uuid } = req.body;
// // // // // //     if (!transaction_uuid) {
// // // // // //       return res.status(400).json({ success: false, message: "Missing transaction UUID" });
// // // // // //     }
// // // // // //     const existingPayment = await Payment.findOne({ orderId: transaction_uuid });
// // // // // //     if (existingPayment) {
// // // // // //       return res.status(400).json({ success: false, message: "Payment already exists" });
// // // // // //     }
// // // // // //     const payment = new Payment({
// // // // // //       transactionId: transaction_uuid,
// // // // // //       orderId: transaction_uuid,
// // // // // //       userId: user._id,
// // // // // //       amount: totalAmount,
// // // // // //       items,
// // // // // //       paymentGateway: "esewa",
// // // // // //       status: "success",
// // // // // //     });
// // // // // //     await payment.save();
// // // // // //     res.json({ success: true, payment });
// // // // // //   } catch (error) {
// // // // // //     res.status(500).json({ success: false, message: "Failed to save payment", error });
// // // // // //   }
// // // // // // });

// // // // // // router.get("/receipt/:transactionId", async (req, res) => {
// // // // // //   try {
// // // // // //     const payment = await Payment.findOne({ orderId: req.params.transactionId }).populate("userId");
// // // // // //     if (!payment) return res.status(404).json({ message: "Payment not found" });
// // // // // //     res.json({ payment });
// // // // // //   } catch (error) {
// // // // // //     res.status(500).json({ message: "Error fetching payment receipt" });
// // // // // //   }
// // // // // // });
// // // // // // router.post("/verify", authMiddleware, async (req, res) => {
// // // // // //   const { transaction_uuid, amount, product_code, status, orderId } = req.body;

// // // // // //   try {
// // // // // //     const isValid = await verifyEsewaPayment(transaction_uuid, amount, product_code);
// // // // // //     if (!isValid) return res.status(400).json({ error: "Invalid payment verification" });

// // // // // //     const payment = await Payment.create({
// // // // // //       transaction_uuid,
// // // // // //       amount,
// // // // // //       product_code,
// // // // // //       status,
// // // // // //       user: req.user._id,
// // // // // //       orderId,
// // // // // //     });

// // // // // //     res.status(200).json({ success: true, payment });
// // // // // //   } catch (error) {
// // // // // //     res.status(500).json({ error: "Payment verification failed" });
// // // // // //   }
// // // // // // });



// // // // // // module.exports = router;



// // // // // const express = require("express");
// // // // // const router = express.Router();
// // // // // const Payment = require("../models/paymentModel");
// // // // // const PurchasedItem = require("../models/purchasedItemModel");
// // // // // const { verifyEsewaPayment } = require("../models/esewa");
// // // // // const authMiddleware = require("../middleware/auth");

// // // // // router.post("/save", async (req, res) => {
// // // // //   try {
// // // // //     const { user, items, totalAmount, transaction_uuid } = req.body;
// // // // //     if (!transaction_uuid) {
// // // // //       return res.status(400).json({ success: false, message: "Missing transaction UUID" });
// // // // //     }

// // // // //     const existingPayment = await Payment.findOne({ orderId: transaction_uuid });
// // // // //     if (existingPayment) {
// // // // //       return res.status(400).json({ success: false, message: "Payment already exists" });
// // // // //     }

// // // // //     const purchasedItem = await PurchasedItem.create({
// // // // //       items,
// // // // //       totalPrice: totalAmount,
// // // // //       userId: user._id,
// // // // //       paymentMethod: "eSewa",
// // // // //       status: "completed",
// // // // //     });

// // // // //     const payment = new Payment({
// // // // //       transactionId: transaction_uuid,
// // // // //       orderId: transaction_uuid,
// // // // //       userId: user._id,
// // // // //       amount: totalAmount,
// // // // //       items,
// // // // //       productId: purchasedItem._id,
// // // // //       paymentGateway: "esewa",
// // // // //       status: "success",
// // // // //     });

// // // // //     await payment.save();
// // // // //     res.json({ success: true, payment });
// // // // //   } catch (error) {
// // // // //     res.status(500).json({ success: false, message: "Failed to save payment", error });
// // // // //   }
// // // // // });

// // // // // router.get("/receipt/:transactionId", async (req, res) => {
// // // // //   try {
// // // // //     const payment = await Payment.findOne({ orderId: req.params.transactionId })
// // // // //       .populate("userId")
// // // // //       .populate("productId");

// // // // //     if (!payment) return res.status(404).json({ message: "Payment not found" });
// // // // //     res.json({ payment });
// // // // //   } catch (error) {
// // // // //     res.status(500).json({ message: "Error fetching payment receipt" });
// // // // //   }
// // // // // });

// // // // // router.post("/verify", authMiddleware, async (req, res) => {
// // // // //   const { transaction_uuid, amount, product_code, status, orderId, items } = req.body;

// // // // //   try {
// // // // //     const isValid = await verifyEsewaPayment(transaction_uuid, amount, product_code);
// // // // //     if (!isValid) return res.status(400).json({ error: "Invalid payment verification" });

// // // // //     const purchasedItem = await PurchasedItem.create({
// // // // //       items,
// // // // //       totalPrice: amount,
// // // // //       userId: req.user._id,
// // // // //       paymentMethod: "eSewa",
// // // // //       status: "completed",
// // // // //     });

// // // // //     const payment = await Payment.create({
// // // // //       transactionId: transaction_uuid,
// // // // //       orderId,
// // // // //       productId: purchasedItem._id,
// // // // //       userId: req.user._id,
// // // // //       amount,
// // // // //       items,
// // // // //       paymentGateway: "esewa",
// // // // //       status,
// // // // //     });

// // // // //     res.status(200).json({ success: true, payment });
// // // // //   } catch (error) {
// // // // //     res.status(500).json({ error: "Payment verification failed" });
// // // // //   }
// // // // // });

// // // // // module.exports = router;
// // // // const express = require("express");
// // // // const router = express.Router();
// // // // const Payment = require("../models/paymentModel");
// // // // const PurchasedItem = require("../models/purchasedItemModel");
// // // // const { verifyEsewaPayment } = require("../models/esewa");
// // // // const authMiddleware = require("../middleware/auth");

// // // // router.post("/save", async (req, res) => {
// // // //   try {
// // // //     const { user, items, totalAmount, transaction_uuid } = req.body;
// // // //     if (!transaction_uuid) return res.status(400).json({ success: false, message: "Missing transaction UUID" });

// // // //     const existingPayment = await Payment.findOne({ orderId: transaction_uuid });
// // // //     if (existingPayment) return res.status(400).json({ success: false, message: "Payment already exists" });

// // // //     const payment = new Payment({
// // // //       transactionId: transaction_uuid,
// // // //       orderId: transaction_uuid,
// // // //       userId: user._id,
// // // //       amount: totalAmount,
// // // //       items,
// // // //       paymentGateway: "esewa",
// // // //       status: "success",
// // // //     });

// // // //     await payment.save();
// // // //     res.json({ success: true, payment });
// // // //   } catch (error) {
// // // //     res.status(500).json({ success: false, message: "Failed to save payment", error });
// // // //   }
// // // // });

// // // // router.get("/receipt/:transactionId", async (req, res) => {
// // // //   try {
// // // //     const payment = await Payment.findOne({ orderId: req.params.transactionId }).populate("userId");
// // // //     if (!payment) return res.status(404).json({ message: "Payment not found" });
// // // //     res.json({ payment });
// // // //   } catch (error) {
// // // //     res.status(500).json({ message: "Error fetching payment receipt" });
// // // //   }
// // // // });

// // // // router.post("/verify", authMiddleware, async (req, res) => {
// // // //   const { transaction_uuid, amount, product_code, status, orderId } = req.body;

// // // //   try {
// // // //     const isValid = await verifyEsewaPayment(transaction_uuid, amount, product_code);
// // // //     if (!isValid) return res.status(400).json({ error: "Invalid payment verification" });

// // // //     const payment = await Payment.create({
// // // //       transactionId: transaction_uuid,
// // // //       orderId,
// // // //       amount,
// // // //       productId: orderId,
// // // //       paymentGateway: "esewa",
// // // //       status,
// // // //       userId: req.user._id,
// // // //     });

// // // //     res.status(200).json({ success: true, payment });
// // // //   } catch (error) {
// // // //     res.status(500).json({ error: "Payment verification failed" });
// // // //   }
// // // // });

// // // // module.exports = router;
// // // const express = require("express");
// // // const router = express.Router();
// // // const Payment = require("../models/paymentModel");
// // // const { verifyEsewaPayment } = require("../models/esewa");
// // // const authMiddleware = require("../middleware/auth");

// // // router.post("/save", async (req, res) => {
// // //   try {
// // //     const { user, items, totalAmount, province, transaction_uuid } = req.body;
// // //     if (!transaction_uuid) return res.status(400).json({ success: false, message: "Missing transaction UUID" });

// // //     const existingPayment = await Payment.findOne({ orderId: transaction_uuid });
// // //     if (existingPayment) return res.status(400).json({ success: false, message: "Payment already exists" });

// // //     const payment = new Payment({
// // //       transactionId: transaction_uuid,
// // //       orderId: transaction_uuid,
// // //       userId: user._id,
// // //       amount: totalAmount,
// // //       items,
// // //       paymentGateway: "esewa",
// // //       status: "success",
// // //     });

// // //     await payment.save();
// // //     res.json({ success: true, payment });
// // //   } catch (error) {
// // //     res.status(500).json({ success: false, message: "Failed to save payment", error });
// // //   }
// // // });

// // // router.get("/receipt/:transactionId", async (req, res) => {
// // //   try {
// // //     const payment = await Payment.findOne({ orderId: req.params.transactionId }).populate("userId");
// // //     if (!payment) return res.status(404).json({ message: "Payment not found" });
// // //     res.json({ payment });
// // //   } catch (error) {
// // //     res.status(500).json({ message: "Error fetching payment receipt" });
// // //   }
// // // });

// // // module.exports = router;
// // const express = require("express");
// // const router = express.Router();
// // const Payment = require("../models/paymentModel");
// // const PurchasedItem = require("../models/purchasedItemModel");
// // const authMiddleware = require("../middleware/auth");

// // router.post("/save", async (req, res) => {
// //   try {
// //     const { user, items, totalAmount, province, transaction_uuid } = req.body;

// //     if (!transaction_uuid) {
// //       return res.status(400).json({ success: false, message: "Missing transaction UUID" });
// //     }

// //     const existingPayment = await Payment.findOne({ orderId: transaction_uuid });
// //     if (existingPayment) {
// //       return res.status(400).json({ success: false, message: "Payment already exists" });
// //     }

// //     const purchasedItem = await PurchasedItem.findByIdAndUpdate(
// //       transaction_uuid,
// //       { status: "completed" },
// //       { new: true }
// //     );

// //     if (!purchasedItem) {
// //       return res.status(404).json({ success: false, message: "Purchased item not found" });
// //     }

// //     const payment = new Payment({
// //       transactionId: transaction_uuid,
// //       orderId: transaction_uuid,
// //       productId: purchasedItem._id,
// //       userId: user._id,
// //       amount: totalAmount,
// //       items,
// //       paymentGateway: "esewa",
// //       status: "success",
// //       paymentMethod: "eSewa",
// //     });

// //     await payment.save();

// //     res.json({ success: true, payment });
// //   } catch (error) {
// //     res.status(500).json({ success: false, message: "Failed to save payment", error });
// //   }
// // });

// // router.get("/receipt/:transactionId", async (req, res) => {
// //   try {
// //     const payment = await Payment.findOne({ orderId: req.params.transactionId }).populate("userId");
// //     if (!payment) return res.status(404).json({ message: "Payment not found" });
// //     res.json({ payment });
// //   } catch (error) {
// //     res.status(500).json({ message: "Error fetching payment receipt" });
// //   }
// // });

// // module.exports = router;
// const express = require("express");
// const router = express.Router();
// const Payment = require("../models/paymentModel");
// const PurchasedItem = require("../models/purchasedItemModel");
// const { verifyEsewaPayment } = require("../models/esewa");
// const authMiddleware = require("../middleware/auth");

// router.post("/save", async (req, res) => {
//   try {
//     const { user, items, totalAmount, province, transaction_uuid } = req.body;
//     if (!transaction_uuid) {
//       return res.status(400).json({ success: false, message: "Missing transaction UUID" });
//     }
//     const existingPayment = await Payment.findOne({ orderId: transaction_uuid });
//     if (existingPayment) {
//       return res.status(400).json({ success: false, message: "Payment already exists" });
//     }
//     const payment = new Payment({
//       transactionId: transaction_uuid,
//       orderId: transaction_uuid,
//       userId: user._id,
//       amount: totalAmount,
//       items,
//       paymentGateway: "esewa",
//       status: "success",
//       paymentMethod: "eSewa",
//     });
//     await payment.save();
//     res.json({ success: true, payment });
//   } catch (error) {
//     res.status(500).json({ success: false, message: "Failed to save payment", error });
//   }
// });

// router.get("/receipt/:transactionId", async (req, res) => {
//   try {
//     const payment = await Payment.findOne({ orderId: req.params.transactionId }).populate("userId");
//     if (!payment) return res.status(404).json({ message: "Payment not found" });
//     res.json({ payment });
//   } catch (error) {
//     res.status(500).json({ message: "Error fetching payment receipt" });
//   }
// });

// router.post("/verify", authMiddleware, async (req, res) => {
//   const { transaction_uuid, amount, product_code, status, orderId } = req.body;
//   try {
//     const isValid = await verifyEsewaPayment(transaction_uuid, amount, product_code);
//     if (!isValid) return res.status(400).json({ error: "Invalid payment verification" });

//     const payment = await Payment.create({
//       transactionId: transaction_uuid,
//       amount,
//       orderId,
//       userId: req.user._id,
//       paymentGateway: "esewa",
//       status: "success",
//       paymentMethod: "eSewa",
//     });

//     res.status(200).json({ success: true, payment });
//   } catch (error) {
//     res.status(500).json({ error: "Payment verification failed" });
//   }
// });

// module.exports = router;
const express = require("express");
const router = express.Router();
const Payment = require("../models/paymentModel");
const PurchasedItem = require("../models/purchasedItemModel");

router.post("/save", async (req, res) => {
  try {
    const { user, items, totalAmount, province, transaction_uuid } = req.body;
    if (!transaction_uuid) return res.status(400).json({ success: false, message: "Missing transaction UUID" });

    const existingPayment = await Payment.findOne({ orderId: transaction_uuid });
    if (existingPayment) return res.status(400).json({ success: false, message: "Payment already exists" });

    const payment = new Payment({
      transactionId: transaction_uuid,
      orderId: transaction_uuid,
      userId: user._id,
      amount: totalAmount,
      items,
      paymentGateway: "esewa",
      status: "success",
    });

    await payment.save();
    await PurchasedItem.findByIdAndUpdate(transaction_uuid, { status: "completed" });

    res.json({ success: true, payment });
  } catch (error) {
    res.status(500).json({ success: false, message: "Failed to save payment", error });
  }
});

router.get("/receipt/:transactionId", async (req, res) => {
  try {
    const payment = await Payment.findOne({ orderId: req.params.transactionId }).populate("userId");
    if (!payment) return res.status(404).json({ message: "Payment not found" });
    res.json({ payment });
  } catch {
    res.status(500).json({ message: "Error fetching payment receipt" });
  }
});

module.exports = router;
