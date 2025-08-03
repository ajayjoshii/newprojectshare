// const mongoose = require('mongoose');

// const userSchema = new mongoose.Schema({
//   name: { type: String, required: true },
//   email: { type: String, required: true, unique: true },
//   province: String,
//   orders: [
//     {
//       date: { type: Date, default: Date.now },
//       items: [{ id: Number, name: String, price: Number, qty: Number }],
//       province: String,
//     },
//   ],

//   password: { type: String, required: true },
//   address: { type: String },

//   profileImage: { type: String, default: "" }, // base64 string or URL
// }, { timestamps: true });


// module.exports = mongoose.model('User', userSchema);// models/User.js
// models/User.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  province: String,
  orders: [
    {
      date: { type: Date, default: Date.now },
      items: [{ id: Number, name: String, price: Number, qty: Number }],
      province: String,
    },
  ],
  password: { type: String, required: true },
  address: { type: String },
  profileImage: { type: String, default: "" },
  resetPasswordToken: String,
  resetPasswordExpires: Date,
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);















