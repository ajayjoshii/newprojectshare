// const mongoose = require('mongoose');
// const OrderSchema = new mongoose.Schema({
//   user: {
//     name: String,
//     email: String,
//     phone: String,
//   },
//   items: [
//     {
//       id: Number,
//       name: String,
//       img: String,
//       qty: Number,
//       price: Number,
//     },
//   ],
//   province: String,
//   createdAt: { type: Date, default: Date.now },
// });
// module.exports = mongoose.model('Order', OrderSchema);
const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  userId: String,
  name: String,
  email: String,
  items: [
    {
      id: String,
      name: String,
      price: Number,
      qty: Number,
      img: String
    }
  ],
  province: String,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Order", orderSchema);
