// // // const mongoose = require("mongoose");

// // // const purchasedItemSchema = new mongoose.Schema({
// // //   items: [
// // //     {
// // //       id: String,
// // //       name: String,
// // //       price: Number,
// // //       qty: Number,
// // //     },
// // //   ],
// // //   totalPrice: Number,
// // //   userId: {
// // //     type: mongoose.Schema.Types.ObjectId,
// // //     ref: "User",
// // //   },
// // //   paymentMethod: {
// // //     type: String,
// // //     enum: ["esewa", "khalti", "cash"],
// // //     default: "esewa",
// // //   },
// // //   status: {
// // //     type: String,
// // //     enum: ["pending", "completed", "failed"],
// // //     default: "pending",
// // //   },
// // // }, {
// // //   timestamps: true,
// // // });

// // // module.exports = mongoose.model("PurchasedItem", purchasedItemSchema);
// // const mongoose = require("mongoose");

// // const purchasedItemSchema = new mongoose.Schema({
// //   items: [
// //     {
// //       itemId: String,
// //       name: String,
// //       qty: Number,
// //       price: Number,
// //     },
// //   ],
// //   totalPrice: { type: Number, required: true },
// //   userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
// //   paymentMethod: { type: String },
// //   status: { type: String, enum: ["pending", "completed", "failed"], default: "pending" },
// // }, { timestamps: true });

// // module.exports = mongoose.model("PurchasedItem", purchasedItemSchema);

// const mongoose = require("mongoose");

// const purchasedItemSchema = new mongoose.Schema(
//   {
//     items: [
//       {
//         itemId: String,
//         name: String,
//         qty: Number,
//         price: Number,
//       },
//     ],
//     totalPrice: { type: Number, required: true },
//     userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
//     paymentMethod: { type: String },
//     status: { type: String, enum: ["pending", "completed", "failed"], default: "pending" },
//   },
//   { timestamps: true }
// );

// module.exports = mongoose.model("PurchasedItem", purchasedItemSchema);
const mongoose = require("mongoose");

const purchasedItemSchema = new mongoose.Schema(
  {
    items: [
      {
        itemId: String,
        name: String,
        qty: Number,
        price: Number,
      },
    ],
    totalPrice: { type: Number, required: true },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    paymentMethod: { type: String },
    status: { type: String, enum: ["pending", "completed", "failed"], default: "pending" },
  },
  { timestamps: true }
);

module.exports = mongoose.model("PurchasedItem", purchasedItemSchema);

