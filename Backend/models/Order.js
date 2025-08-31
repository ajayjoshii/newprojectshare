// // const mongoose = require('mongoose');
// // const OrderSchema = new mongoose.Schema({
// //   user: {
// //     name: String,
// //     email: String,
// //     phone: String,
// //   },
// //   items: [
// //     {
// //       id: Number,
// //       name: String,
// //       img: String,
// //       qty: Number,
// //       price: Number,
// //     },
// //   ],
// //   province: String,
// //   createdAt: { type: Date, default: Date.now },
// // });
// // module.exports = mongoose.model('Order', OrderSchema);

// // models/Order.js

// const mongoose = require("mongoose");

// const orderItemSchema = new mongoose.Schema({
//   id: String,
//   name: String,
//   price: Number,
//   qty: Number,
//   img: String
// }, { _id: false });

// const orderSchema = new mongoose.Schema({
//   userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
//   name: String,
//   email: String,
//   items: [orderItemSchema],
//   province: String,
//   totalPrice: { type: Number, default: 0 },
//   status: { type: String, enum: ["pending", "processing", "shipped", "completed", "cancelled"], default: "pending" },
//   paymentStatus: { type: String, enum: ["pending", "paid", "failed", "refunded"], default: "pending" },
//   createdAt: { type: Date, default: Date.now }
// }, { timestamps: true });

// module.exports = mongoose.model("Order", orderSchema);

const mongoose = require("mongoose");
const { v4: uuidv4 } = require("uuid");

const orderItemSchema = new mongoose.Schema({
  id: String,
  name: String,
  price: Number,
  qty: Number,
  img: String
}, { _id: false });

const orderSchema = new mongoose.Schema({
  transactionUUID: { type: String, default: uuidv4, unique: true },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  name: String,
  email: String,
  items: [orderItemSchema],
  province: String,
  totalPrice: { type: Number, default: 0 },
  status: { type: String, enum: ["pending", "processing", "shipped", "completed", "cancelled"], default: "pending" },
  paymentStatus: { type: String, enum: ["pending", "paid", "failed", "refunded"], default: "pending" },
  createdAt: { type: Date, default: Date.now }
}, { timestamps: true });

module.exports = mongoose.model("Order", orderSchema);
