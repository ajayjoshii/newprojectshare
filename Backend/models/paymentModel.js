// // // const mongoose = require("mongoose");

// // // const paymentSchema = new mongoose.Schema(
// // //   {
// // //     transactionId: { type: String, unique: true },
// // //     pidx: { type: String, unique: true },
// // //     productId: {
// // //       type: mongoose.Schema.Types.ObjectId,
// // //       ref: "PurchasedItem",
// // //       required: true,
// // //     },
// // //     amount: { type: Number, required: true },
// // //     dataFromVerificationReq: { type: Object },
// // //     apiQueryFromUser: { type: Object },
// // //     paymentGateway: {
// // //       type: String,
// // //       enum: ["khalti", "esewa", "connectIps"],
// // //       required: true,
// // //     },
// // //     status: {
// // //       type: String,
// // //       enum: ["success", "pending", "failed"],
// // //       default: "pending",
// // //     },
// // //     paymentDate: { type: Date, default: Date.now },
// // //   },
// // //   { timestamps: true }
// // // );

// // // const Payment = mongoose.model("Payment", paymentSchema);
// // // module.exports = Payment;


// // // const mongoose = require("mongoose");

// // // const paymentSchema = new mongoose.Schema(
// // //   {
// // //     transactionId: { type: String, unique: true, required: true }, // main transaction id
// // //     pidx: { type: String, unique: true, sparse: true }, // optional unique payment index
// // //     orderId: { type: String, required: true }, // your order or transaction UUID
// // //     productId: {
// // //       type: mongoose.Schema.Types.ObjectId,
// // //       ref: "PurchasedItem",
// // //       required: false,
// // //     },
// // //     userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
// // //     amount: { type: Number, required: true },
// // //     items: [
// // //       {
// // //         itemId: String,
// // //         name: String,
// // //         qty: Number,
// // //         price: Number,
// // //       },
// // //     ],
// // //     dataFromVerificationReq: { type: Object },
// // //     apiQueryFromUser: { type: Object },
// // //     paymentGateway: {
// // //       type: String,
// // //       enum: ["khalti", "esewa", "connectIps"],
// // //       required: true,
// // //     },
// // //     status: {
// // //       type: String,
// // //       enum: ["success", "pending", "failed"],
// // //       default: "pending",
// // //     },
// // //     paymentMethod: { type: String, default: "eSewa" }, // fallback field
// // //     paymentDate: { type: Date, default: Date.now },
// // //   },
// // //   { timestamps: true }
// // // );

// // // const Payment = mongoose.model("Payment", paymentSchema);
// // // module.exports = Payment;


// // // const mongoose = require("mongoose");

// // // const paymentSchema = new mongoose.Schema(
// // //   {
// // //     transactionId: { type: String, unique: true, required: true },
// // //     orderId: { type: String, required: true },
// // //     productId: {
// // //       type: mongoose.Schema.Types.ObjectId,
// // //       ref: "PurchasedItem",
// // //     },
// // //     userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
// // //     amount: { type: Number, required: true },
// // //     items: [
// // //       {
// // //         itemId: String,
// // //         name: String,
// // //         qty: Number,
// // //         price: Number,
// // //       },
// // //     ],
// // //     dataFromVerificationReq: { type: Object },
// // //     paymentGateway: { type: String, enum: ["khalti", "esewa", "connectIps"], required: true },
// // //     status: { type: String, enum: ["success", "pending", "failed"], default: "pending" },
// // //     paymentMethod: { type: String, default: "eSewa" },
// // //     paymentDate: { type: Date, default: Date.now },
// // //   },
// // //   { timestamps: true }
// // // );

// // // module.exports = mongoose.model("Payment", paymentSchema);
// // const mongoose = require("mongoose");

// // const paymentSchema = new mongoose.Schema(
// //   {
// //     transactionId: { type: String, unique: true, required: true },
// //     orderId: { type: String, required: true },
// //     productId: { type: mongoose.Schema.Types.ObjectId, ref: "PurchasedItem" },
// //     userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
// //     amount: { type: Number, required: true },
// //     items: [
// //       {
// //         itemId: String,
// //         name: String,
// //         qty: Number,
// //         price: Number,
// //       },
// //     ],
// //     dataFromVerificationReq: { type: Object },
// //     paymentGateway: { type: String, enum: ["khalti", "esewa", "connectIps"], required: true },
// //     status: { type: String, enum: ["success", "pending", "failed"], default: "pending" },
// //     paymentMethod: { type: String, default: "eSewa" },
// //     paymentDate: { type: Date, default: Date.now },
// //   },
// //   { timestamps: true }
// // );

// // module.exports = mongoose.model("Payment", paymentSchema);


// const mongoose = require("mongoose");

// const paymentSchema = new mongoose.Schema({
//   transactionId: { type: String, unique: true, required: true },
//   orderId: { type: String, required: true },
//   productId: { type: mongoose.Schema.Types.ObjectId, ref: "PurchasedItem" },
//   userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
//   amount: { type: Number, required: true },
//   items: [
//     {
//       itemId: String,
//       name: String,
//       qty: Number,
//       price: Number,
//     },
//   ],
//   dataFromVerificationReq: { type: Object },
//   paymentGateway: { type: String, enum: ["khalti", "esewa", "connectIps"], required: true },
//   status: { type: String, enum: ["success", "pending", "failed"], default: "pending" },
//   paymentMethod: { type: String, default: "eSewa" },
//   paymentDate: { type: Date, default: Date.now },
// }, { timestamps: true });

// module.exports = mongoose.model("Payment", paymentSchema);
const mongoose = require("mongoose");

const paymentSchema = new mongoose.Schema(
  {
    transactionId: { type: String, unique: true, required: true },
    orderId: { type: String, required: true },
    productId: { type: mongoose.Schema.Types.ObjectId, ref: "PurchasedItem" },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    amount: { type: Number, required: true },
    items: [
      {
        itemId: String,
        name: String,
        qty: Number,
        price: Number,
      },
    ],
    dataFromVerificationReq: { type: Object },
    paymentGateway: { type: String, enum: ["khalti", "esewa", "connectIps"], required: true },
    status: { type: String, enum: ["success", "pending", "failed"], default: "pending" },
    paymentMethod: { type: String, default: "eSewa" },
    paymentDate: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Payment", paymentSchema);

