
const Order = require('../models/Order');
const Payment = require('../models/paymentModel');
const User = require('../models/User');


exports.submitOrder = async (req, res) => {
  try {
    const { userId, items, province, name, email, totalPrice, paymentMethod } = req.body;

    const order = await Order.create({
      userId, items, province, name, email, totalPrice, status: "pending", paymentStatus: "pending"
    });

    if (userId) {
      await User.findByIdAndUpdate(userId, { $push: { orders: order._id } });
    }

    if (paymentMethod) {
      await Payment.create({ userId, orderId: order._id, amount: totalPrice, status: "pending", paymentMethod });
    }

    res.json({ success: true, order });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Server error" });
  }
};



exports.getOrderDetails = async (req, res) => {
  try {
    const { orderId } = req.params;
    const order = await Order.findById(orderId).populate('userId', 'name email phone address');
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

// Admin: list all orders with optional filters
exports.listOrders = async (req, res) => {
  try {
    const { status, paymentStatus, province, q } = req.query;
    const filter = {};
    if (status) filter.status = status;
    if (paymentStatus) filter.paymentStatus = paymentStatus;
    if (province) filter.province = province;
    if (q) filter.$or = [
      { name: new RegExp(q, "i") },
      { email: new RegExp(q, "i") },
    ];

    const orders = await Order.find(filter).sort({ createdAt: -1 }).limit(200).populate('userId', 'name email phone');
    res.json({ success: true, orders });
  } catch (err) {
    console.error('List orders error:', err);
    res.status(500).json({ success: false, message: 'Server error.' });
  }
};

// Admin: update order status / payment status
exports.updateOrder = async (req, res) => {
  try {
    const { orderId } = req.params;
    const { status, paymentStatus } = req.body;
    const update = {};
    if (status) update.status = status;
    if (paymentStatus) update.paymentStatus = paymentStatus;

    const order = await Order.findByIdAndUpdate(orderId, update, { new: true });
    if (!order) return res.status(404).json({ msg: 'Order not found' });

    res.json({ success: true, order });
  } catch (err) {
    console.error('Update order error:', err);
    res.status(500).json({ success: false, message: 'Server error.' });
  }
};

// Admin: delete order
exports.deleteOrder = async (req, res) => {
  try {
    const { orderId } = req.params;
    await Order.findByIdAndDelete(orderId);
    // Optionally remove from user's orders array
    await User.updateMany({}, { $pull: { orders: { _id: orderId } }});
    res.json({ success: true, message: 'Order deleted' });
  } catch (err) {
    console.error('Delete order error:', err);
    res.status(500).json({ success: false, message: 'Server error.' });
  }
};