const Payment = require("../models/paymentModel");
const PurchasedItem = require("../models/purchasedItemModel");

exports.saveEsewaPayment = async (req, res) => {
  try {
    const { user, items, totalAmount, province, transaction_uuid, dataFromVerificationReq } = req.body;

    if (!transaction_uuid || !user || !items || !totalAmount) {
      return res.status(400).json({ success: false, message: "Missing payment details" });
    }

    const existingPayment = await Payment.findOne({ transactionId: transaction_uuid });
    if (existingPayment) {
      return res.status(400).json({ success: false, message: "Payment already exists" });
    }

    const payment = new Payment({
      transactionId: transaction_uuid,
      orderId: transaction_uuid,
      userId: user._id,
      amount: totalAmount,
      items,
      dataFromVerificationReq,
      paymentGateway: "esewa",
      paymentMethod: "eSewa",
      status: "success",
      paymentDate: new Date(),
    });

    await payment.save();

    const cleanId = transaction_uuid.split("?")[0]; // ← This strips the ?data=... part
    await PurchasedItem.findByIdAndUpdate(cleanId, { status: "completed" });


    res.status(201).json({ success: true, payment });
  } catch (err) {
    res.status(500).json({ success: false, message: "Failed to save payment", error: err.message });
  }
};

exports.getPaymentByOrderId = async (req, res) => {
  try {
    const { orderId } = req.params;
    const payment = await Payment.findOne({ orderId }).populate("userId");
    if (!payment) return res.status(404).json({ success: false, message: "Payment not found" });
    res.json({ success: true, payment });
  } catch (err) {
    res.status(500).json({ success: false, message: "Server error" });
  }
};
