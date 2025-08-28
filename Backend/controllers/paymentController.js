
// const Payment = require("../models/paymentModel");
// const Order = require("../models/Order");

// exports.saveEsewaPayment = async (req, res) => {
//   try {
//     const { user, items, totalAmount, province, transaction_uuid } = req.body;
//     if (!transaction_uuid || !user || !items || !totalAmount) return res.status(400).json({ success: false, message: "Missing payment details" });

//     const existingPayment = await Payment.findOne({ transactionId: transaction_uuid });
//     if (existingPayment) return res.status(400).json({ success: false, message: "Payment already exists" });

//     const orderItems = items.map(i => ({ ...i, province }));
//     const order = new Order({
//       userId: user._id,
//       items: orderItems,
//       province,
//       name: user.name,
//       email: user.email,
//       totalPrice: totalAmount,
//       status: 'pending',
//       paymentStatus: 'paid'
//     });
//     await order.save();

//     const payment = new Payment({
//       transactionId: transaction_uuid,
//       orderId: order._id,
//       userId: user._id,
//       amount: totalAmount,
//       items: orderItems,
//       province,
//       paymentGateway: "esewa",
//       paymentMethod: "eSewa",
//       status: "success"
//     });
//     await payment.save();

//     res.status(201).json({ success: true, payment, order });
//   } catch (err) {
//     res.status(500).json({ success: false, message: err.message });
//   }
// };

// exports.getPaymentByOrderId = async (req, res) => {
//   try {
//     const { orderId } = req.params;
//     const payment = await Payment.findOne({ orderId }).populate("userId");
//     if (!payment) return res.status(404).json({ success: false, message: "Payment not found" });
//     res.json({ success: true, payment });
//   } catch (err) {
//     res.status(500).json({ success: false, message: "Server error" });
//   }
// // };

// const Payment = require("../models/paymentModel");
// const Order = require("../models/Order");

// exports.saveEsewaPayment = async (req, res) => {
//   try {
//     const { user, items, totalAmount, province, transaction_uuid, dataFromVerificationReq } = req.body;
//     if (!transaction_uuid || !user || !items || !totalAmount) {
//       return res.status(400).json({ success: false, message: "Missing payment details" });
//     }

//     // Prevent duplicate payment
//     const existingPayment = await Payment.findOne({ transactionId: transaction_uuid });
//     if (existingPayment) {
//       return res.status(400).json({ success: false, message: "Payment already exists" });
//     }

//     // Save order if not already created
//     let order = await Order.findOne({ transaction_uuid });
//     if (!order) {
//       const orderItems = items.map(i => ({ ...i, province }));
//       order = new Order({
//         userId: user._id,
//         items: orderItems,
//         province,
//         name: user.name,
//         email: user.email,
//         totalPrice: totalAmount,
//         status: "pending",
//         paymentStatus: "paid",
//         transaction_uuid,
//       });
//       await order.save();
//     }

//     // Save payment
//     const payment = new Payment({
//       transactionId: transaction_uuid,
//       orderId: order._id,
//       userId: user._id,
//       amount: totalAmount,
//       items,
//       province,
//       paymentGateway: "esewa",
//       paymentMethod: "eSewa",
//       status: "success",
//       dataFromVerificationReq: dataFromVerificationReq || {},
//     });
//     await payment.save();

//     res.status(201).json({ success: true, payment, order });
//   } catch (err) {
//     console.error("Save payment error:", err);
//     res.status(500).json({ success: false, message: err.message });
//   }
// };

// exports.getPaymentByOrderId = async (req, res) => {
//   try {
//     const { orderId } = req.params;
//     const payment = await Payment.findOne({ orderId }).populate("userId");
//     if (!payment) return res.status(404).json({ success: false, message: "Payment not found" });
//     res.json({ success: true, payment });
//   } catch (err) {
//     res.status(500).json({ success: false, message: "Server error" });
//   }
// };

// // ✅ NEW: Admin fetch all payments
// exports.getAllPayments = async (req, res) => {
//   try {
//     const payments = await Payment.find().populate("userId").sort({ createdAt: -1 });
//     res.json(payments);
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// };


// const Payment = require("../models/paymentModel");
// const Order = require("../models/Order");

// exports.saveEsewaPayment = async (req, res) => {
//   try {
//     const { user, items, totalAmount, province, transaction_uuid } = req.body;
//     if (!transaction_uuid || !user || !items || !totalAmount) {
//       return res.status(400).json({ success: false, message: "Missing payment details" });
//     }

//     const existingPayment = await Payment.findOne({ transactionId: transaction_uuid });
//     if (existingPayment) {
//       return res.status(400).json({ success: false, message: "Payment already exists" });
//     }

//     // create order
//     // const orderItems = items.map(i => ({ ...i, province }));
//     const orderItems = items.map(i => ({
//       itemId: i._id?.toString() || "",
//       name: i.name || i.productName,
//       qty: i.qty || i.quantity || 1,
//       price: i.price || i.totalPrice || 0,
//     }));


//     const order = new Order({
//       userId: user._id,
//       items: orderItems,
//       province,
//       name: user.name,
//       email: user.email,
//       totalPrice: totalAmount,
//       status: "pending",
//       paymentStatus: "paid"
//     });
//     await order.save();

//     // create payment
//     const payment = new Payment({
//       transactionId: transaction_uuid,
//       orderId: order._id,
//       userId: user._id,
//       amount: totalAmount,
//       items: orderItems,
//       province,
//       paymentGateway: "esewa",
//       paymentMethod: "eSewa",
//       status: "success"
//     });
//     await payment.save();

//     res.status(201).json({ success: true, payment, order });
//   } catch (err) {
//     res.status(500).json({ success: false, message: err.message });
//   }
// };

// // for admin and receipt
// exports.getPaymentByOrderId = async (req, res) => {
//   try {
//     const { orderId } = req.params;
//     const payment = await Payment.findOne({ orderId }).populate("userId");
//     if (!payment) return res.status(404).json({ success: false, message: "Payment not found" });
//     res.json({ success: true, payment });
//   } catch (err) {
//     res.status(500).json({ success: false, message: "Server error" });
//   }
// };

// // get all payments (admin)
// exports.getAllPayments = async (req, res) => {
//   try {
//     const payments = await Payment.find().populate("userId");
//     res.json(payments);
//   } catch (err) {
//     res.status(500).json({ success: false, message: "Server error" });
//   }
// };


const Payment = require("../models/paymentModel");
const Order = require("../models/Order");

exports.saveEsewaPayment = async (req, res) => {
  try {
    const { user, items, totalAmount, province, transaction_uuid } = req.body;

    if (!transaction_uuid || !user || !items || !totalAmount) {
      return res.status(400).json({ success: false, message: "Missing payment details" });
    }

    const existingPayment = await Payment.findOne({ transactionId: transaction_uuid });
    if (existingPayment) {
      return res.status(400).json({ success: false, message: "Payment already exists" });
    }

    const orderItems = items.map(i => ({
      itemId: i._id?.toString() || i.itemId || "",
      name: i.name || i.productName || "Unknown Item",
      qty: i.qty || i.quantity || 1,
      price: i.price || i.totalPrice || 0,
    }));

    // create order
    const order = new Order({
      userId: user._id,
      items: orderItems,
      province,
      name: user.name,
      email: user.email,
      totalPrice: totalAmount,
      status: "pending",
      paymentStatus: "paid",
    });
    await order.save();

    // create payment
    const payment = new Payment({
      transactionId: transaction_uuid,
      orderId: order._id,
      userId: user._id,
      amount: totalAmount,
      items: orderItems,
      province,
      paymentGateway: "esewa",
      paymentMethod: "eSewa",
      status: "success",
    });
    await payment.save();

    res.status(201).json({ success: true, payment, order });
  } catch (err) {
    console.error("Payment save error:", err);
    res.status(500).json({ success: false, message: err.message });
  }
};

exports.getPaymentByOrderId = async (req, res) => {
  try {
    const { orderId } = req.params;
    const payment = await Payment.findOne({ orderId }).populate("userId");
    if (!payment) return res.status(404).json({ success: false, message: "Payment not found" });
    res.json({ success: true, payment });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

exports.getAllPayments = async (req, res) => {
  try {
    const payments = await Payment.find().populate("userId");
    res.json(payments);
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Server error" });
  }
};
