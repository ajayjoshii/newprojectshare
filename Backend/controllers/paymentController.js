const Payment = require('../models/Payment');

exports.savePayment = async (req, res) => {
  try {
    const { orderId, amount, items } = req.body;
    const userId = req.user._id; // From auth middleware

    if (!orderId || !amount || !items) {
      return res.status(400).json({ success: false, message: 'Missing payment info.' });
    }

    const payment = new Payment({
      userId,
      orderId,
      amount,
      items,
      status: 'Success',
    });

    await payment.save();

    res.json({ success: true, payment });
  } catch (err) {
    console.error('Save payment error:', err);
    res.status(500).json({ success: false, message: 'Server error.' });
  }
};

exports.getPaymentByOrderId = async (req, res) => {
  try {
    const { orderId } = req.params;
    const userId = req.user._id;

    const payment = await Payment.findOne({ orderId, userId });
    if (!payment) {
      return res.status(404).json({ success: false, message: 'Payment not found.' });
    }

    res.json({ success: true, payment });
  } catch (err) {
    console.error('Get payment error:', err);
    res.status(500).json({ success: false, message: 'Server error.' });
  }
};
