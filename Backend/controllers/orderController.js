
const Order = require('../models/Order');
const Payment = require('../models/Payment');

exports.submitOrder = async (req, res) => {
  try {
    const { userId, items, province } = req.body;
    const order = new Order({
      userId,
      items,
      province,
      status: 'pending'
    });

    await order.save();
    res.json({ success: true, order });
  } catch (err) {
    console.error('Submit order error:', err);
    res.status(500).json({ success: false, message: 'Server error.' });
  }
};

exports.getOrderDetails = async (req, res) => {
  try {
    const { orderId } = req.params;
    const order = await Order.findById(orderId);
    if (!order) {
      return res.status(404).json({ success: false, message: 'Order not found.' });
    }

    const payment = await Payment.findOne({ orderId: order._id });
    res.json({ success: true, order, payment });
  } catch (err) {
    console.error('Get order error:', err);
    res.status(500).json({ success: false, message: 'Server error.' });
  }
};