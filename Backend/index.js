// // // const express = require("express");
// // // const session = require("express-session");
// // // const passport = require("passport");
// // // const dotenv = require("dotenv");
// // // const connectDb = require("./config/db"); // ✅ Your DB file

// // // dotenv.config();

// // // const app = express();
// // // connectDb(); // ✅ CONNECT TO MONGO FIRST

// // // require("./config/passport"); // ✅ Setup passport AFTER DB is connected

// // // app.use(express.json());
// // // app.use(
// // //   session({
// // //     secret: process.env.SESSION_SECRET || "keyboard cat",
// // //     resave: false,
// // //     saveUninitialized: false,
// // //   })
// // // );
// // // app.use(passport.initialize());
// // // app.use(passport.session());

// // // // Routes
// // // app.use("/auth", require("./routes/authRoutes"));

// // // app.get("/", (req, res) => {
// // //   res.send("✅ Server is running");
// // // });

// // // const PORT = process.env.PORT || 5000;
// // // app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));










// // // const express = require("express");
// // // const mongoose = require("mongoose");
// // // const passport = require("passport");
// // // const session = require("express-session");
// // // const dotenv = require("dotenv");
// // // const cors = require("cors");
// // // const cookieParser = require("cookie-parser");
// // // const authRoutes = require("./routes/auth.route");
// // // const connectDb = require("./config/db"); 
// // // const path = require('path');
// // // const userRoutes = require("./routes/userRoutes");
// // // const recommendRoutes = require("./routes/recommend");
// // // const orderRoutes = require("./routes/order");

// // // require("./config/passport");

// // // dotenv.config();

// // // const app = express();

// // // connectDb();

// // // // MongoDB Connection
// // // mongoose.connect(process.env.MONGO_URL, {
// // //   useNewUrlParser: true,
// // //   useUnifiedTopology: true
// // // })
// // // .then(() => console.log("✅ MongoDB connected"))
// // // .catch((err) => console.error("❌ MongoDB error:", err));

// // // // Middleware
// // // app.use(cors({
// // //   origin: "http://localhost:3000",
// // //   credentials: true
// // // }));
// // // app.use(express.json({ limit: '10mb' }));
// // // app.use("/api/order", orderRoutes);


// // // app.use(cookieParser());

// // // // Session Setup
// // // app.use(session({
// // //   secret: process.env.SESSION_SECRET, // replace with strong secret in production
// // //   resave: false,
// // //   saveUninitialized: false,
// // // }));
// // // app.use("/api/recommend", recommendRoutes);

// // // // Passport Init
// // // app.use(passport.initialize());
// // // app.use(passport.session());

// // // // Routes
// // // app.use("/api/auth", authRoutes);
// // // app.use("/api/users", userRoutes);

// // // app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// // // // Default
// // // app.get("/", (req, res) => {
// // //   res.send("Server running with Google/Facebook OAuth");
// // // });
// // // // Inside index.js or routes/auth.js
// // // app.get('/api/auth/google',
// // //   passport.authenticate('google', { scope: ['profile', 'email'] })
// // // );

// // // // Start Server
// // // app.listen(process.env.PORT || 5000, () => {
// // //   console.log('Server started on port', process.env.PORT || 5000);
// // // });



// // const express = require("express");
// // const mongoose = require("mongoose");
// // const passport = require("passport");
// // const session = require("express-session");
// // const dotenv = require("dotenv");
// // const cors = require("cors");
// // const cookieParser = require("cookie-parser");
// // const path = require("path");
// // const bodyParser = require("body-parser");
// // const authRoutes = require("./routes/auth.route");
// // const userRoutes = require("./routes/userRoutes");
// // const recommendRoutes = require("./routes/recommend");
// // const orderRoutes = require("./routes/orders");
// // const connectToMongo = require("./config/db");
// // const { getEsewaPaymentHash, verifyEsewaPayment } = require("./esewa");
// // const app = express();

// // const paymentRoutes = require('./routes/paymentRoutes');

// // app.use('/api/payments', paymentRoutes);
// // app.use('/api/users', userRoutes);
// // app.use('/api/orders', orderRoutes);

// // const Payment = require("./paymentModel");
// // const Item = require("./itemModel");
// // const PurchasedItem = require("./models/purchasedItemModel");
// // if (process.env.NODE_ENV !== "production") {
// //   require("dotenv").config();
// // }
// // app.use(bodyParser.json());

// // connectToMongo();

// // dotenv.config(); // Load env variables


// // const allowedOrigins = ["http://localhost:5173", "http://localhost:3000"];

// // app.use(cors({
// //   origin: function (origin, callback) {
// //     if (!origin || allowedOrigins.includes(origin)) {
// //       callback(null, true);
// //     } else {
// //       callback(new Error("Not allowed by CORS"));
// //     }
// //   },
// //   credentials: true,
// // }));


// // app.use(express.json({ limit: "10mb" }));
// // app.use("/api/payments", paymentRoutes);

// // app.use(cookieParser());

// // // Express session
// // app.use(session({
// //   secret: process.env.SESSION_SECRET || "supersecret", // Replace in .env
// //   resave: false,
// //   saveUninitialized: false,
// // }));

// // // Passport
// // app.use(passport.initialize());
// // app.use(passport.session());

// // // Static file serving (profile images)
// // app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// // // Routes
// // app.use("/api/auth", authRoutes);
// // app.use("/api/users", userRoutes);
// // app.use("/api/recommend", recommendRoutes);
// // app.use("/api/order", orderRoutes);
// // app.use("/api/cart", require("./routes/cart"));




// // // app.post("/initialize-esewa", async (req, res) => {
// // //   try {
// // //     const { items, totalPrice, userId } = req.body;

// // //     if (!items || !items.length) {
// // //       return res.status(400).json({ success: false, message: "No items provided" });
// // //     }

// // //     // You can validate items here (optional)

// // //     const purchasedItemData = await PurchasedItem.create({
// // //       items,
// // //       totalPrice,
// // //       userId,
// // //       paymentMethod: "esewa",
// // //       status: "pending",
// // //     });

// // //     const paymentInitate = await getEsewaPaymentHash({
// // //       amount: totalPrice,
// // //       transaction_uuid: purchasedItemData._id,
// // //     });

// // //     res.json({
// // //       success: true,
// // //       payment: paymentInitate,
// // //       purchasedItemData,
// // //     });
// // //   } catch (error) {
// // //     console.error("Esewa init error:", error);
// // //     res.status(500).json({
// // //       success: false,
// // //       error: error.message || error,
// // //     });
// // //   }
// // // });


// // // // to verify payment this is our `success_url`
// // // app.get("/complete-payment", async (req, res) => {
// // //   const { data } = req.query;

// // //   try {
// // //     const paymentInfo = await verifyEsewaPayment(data);
// // //     const purchasedItemData = await PurchasedItem.findById(
// // //       paymentInfo.response.transaction_uuid
// // //     );
// // //     if (!purchasedItemData) {
// // //       res.status(500).json({
// // //         success: false,
// // //         message: "Purchase not found",
// // //       });
// // //     }
// // //     // Create a new payment record
// // //     const paymentData = await Payment.create({
// // //       pidx: paymentInfo.decodedData.transaction_code,
// // //       transactionId: paymentInfo.decodedData.transaction_code,
// // //       productId: paymentInfo.response.transaction_uuid,
// // //       amount: purchasedItemData.totalPrice,
// // //       dataFromVerificationReq: paymentInfo,
// // //       apiQueryFromUser: req.query,
// // //       paymentGateway: "esewa",
// // //       status: "success",
// // //     });

// // //     //updating purchased record
// // //     await PurchasedItem.findByIdAndUpdate(
// // //       paymentInfo.response.transaction_uuid,
// // //       {
// // //         $set: {
// // //           status: "completed",
// // //         },
// // //       }
// // //     );
// // //     // Send success response
// // //     res.json({
// // //       success: true,
// // //       message: "Payment Successful",
// // //       paymentData,
// // //     });
// // //   } catch (error) {
// // //     res.status(500).json({
// // //       success: false,
// // //       message: "An error occurred",
// // //       error,
// // //     });
// // //   }
// // // });

// // app.get("/create-item", async (req, res) => {
// //   let itemData = await Item.create({
// //     name: "Headphone",
// //     price: 1000,
// //     inStock: true,
// //     category: "vayo pardaina",
// //   });
// //   res.json({
// //     success: true,
// //     item: itemData,
// //   });
// // });

// // app.get("/esewa", function (req, res) {
// //   res.sendFile(__dirname + "/test.html");
// // });


// // app.post("/initialize-esewa", async (req, res) => {
// //   try {
// //     const { items, totalPrice, userId } = req.body;
// //     if (!items || !items.length) {
// //       return res.status(400).json({ success: false, message: "No items provided" });
// //     }
// //     const purchasedItemData = await PurchasedItem.create({
// //       items,
// //       totalPrice,
// //       userId,
// //       paymentMethod: "esewa",
// //       status: "pending",
// //     });

// //     const paymentInitate = await getEsewaPaymentHash({
// //       amount: totalPrice,
// //       transaction_uuid: purchasedItemData._id.toString(),
// //     });

// //     res.json({
// //       success: true,
// //       payment: paymentInitate,
// //       purchasedItemData,
// //     });
// //   } catch (error) {
// //     console.error("Esewa init error:", error);
// //     res.status(500).json({ success: false, error: error.message || error });
// //   }
// // });

// // app.get("/complete-payment", async (req, res) => {
// //   const { data } = req.query;
// //   try {
// //     const paymentInfo = await verifyEsewaPayment(data);
// //     const purchasedItemData = await PurchasedItem.findById(paymentInfo.response.transaction_uuid);
// //     if (!purchasedItemData) {
// //       return res.status(404).json({ success: false, message: "Purchase not found" });
// //     }
// //     const paymentData = await Payment.create({
// //       transactionId: paymentInfo.decodedData.transaction_code,
// //       orderId: paymentInfo.response.transaction_uuid,
// //       productId: paymentInfo.response.transaction_uuid,
// //       userId: purchasedItemData.userId,
// //       amount: purchasedItemData.totalPrice,
// //       items: purchasedItemData.items,
// //       dataFromVerificationReq: paymentInfo,
// //       paymentGateway: "esewa",
// //       status: "success",
// //       paymentMethod: "eSewa",
// //     });
// //     await PurchasedItem.findByIdAndUpdate(paymentInfo.response.transaction_uuid, { status: "completed" });
// //     res.json({ success: true, message: "Payment Successful", paymentData });
// //   } catch (error) {
// //     res.status(500).json({ success: false, message: "An error occurred", error });
// //   }
// // });

// // app.listen(3001, () => {
// //   console.log("Backend listening at http://localhost:3001");
// // });



// const express = require("express");
// const mongoose = require("mongoose");
// const passport = require("passport");
// const session = require("express-session");
// const dotenv = require("dotenv");
// const cors = require("cors");
// const cookieParser = require("cookie-parser");
// const path = require("path");
// const bodyParser = require("body-parser");

// const authRoutes = require("./routes/auth.route");
// const userRoutes = require("./routes/userRoutes");
// const recommendRoutes = require("./routes/recommend");
// const orderRoutes = require("./routes/orders");
// const cartRoutes = require("./routes/cart");
// const paymentRoutes = require("./routes/paymentRoutes");

// const connectToMongo = require("./config/db");
// const { getEsewaPaymentHash, verifyEsewaPayment } = require("./models/esewa");

// const Payment = require("./models/paymentModel");
// const Item = require("./models/itemModel");
// const PurchasedItem = require("./models/purchasedItemModel");

// dotenv.config(); // Load env variables
// connectToMongo(); // Connect MongoDB

// const app = express();

// // ✅ CORS Middleware (Must be before any routes)
// const allowedOrigins = ["http://localhost:5173", "http://localhost:3000"];
// app.use(cors({
//   origin: function (origin, callback) {
//     if (!origin || allowedOrigins.includes(origin)) {
//       callback(null, true);
//     } else {
//       callback(new Error("Not allowed by CORS"));
//     }
//   },
//   credentials: true,
// }));



// // ✅ Middlewares
// app.use(bodyParser.json());
// app.use(express.json({ limit: "10mb" }));
// app.use(cookieParser());

// app.use(session({
//   secret: process.env.SESSION_SECRET || "supersecret",
//   resave: false,
//   saveUninitialized: false,
//   cookie: {
//     secure: false, // ✅ true only if using HTTPS
//     httpOnly: true,
//     sameSite: "lax",
//   },
// }));

// app.use(passport.initialize());
// app.use(passport.session());

// // ✅ Serve static uploads
// app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// // ✅ Routes
// app.use("/api/auth", authRoutes);
// app.use("/api/users", userRoutes);
// app.use("/api/recommend", recommendRoutes);
// app.use("/api/order", orderRoutes);
// app.use("/api/cart", cartRoutes);
// app.use("/api/payments", paymentRoutes);

// // ✅ Test route to create item
// // app.get("/create-item", async (req, res) => {
// //   let itemData = await Item.create({
// //     name: "Headphone",
// //     price: 1000,
// //     inStock: true,
// //     category: "vayo pardaina",
// //   });
// //   res.json({ success: true, item: itemData });
// // });

// // ✅ Test route for static Esewa HTML
// app.get("/esewa", (req, res) => {
//   res.sendFile(__dirname + "/test.html");
// });

// // ✅ Initialize eSewa payment
// app.post("/initialize-esewa", async (req, res) => {
//   try {
//     const { items, totalPrice, userId } = req.body;

//     if (!items || !items.length) {
//       return res.status(400).json({ success: false, message: "No items provided" });
//     }

//     const purchasedItemData = await PurchasedItem.create({
//       items,
//       totalPrice,
//       userId,
//       paymentMethod: "esewa",
//       status: "pending",
//     });

//     const paymentInitate = await getEsewaPaymentHash({
//       amount: totalPrice,
//       transaction_uuid: purchasedItemData._id.toString(),
//     });

//     res.json({
//       success: true,
//       payment: paymentInitate,
//       purchasedItemData,
//     });
//   } catch (error) {
//     console.error("Esewa init error:", error);
//     res.status(500).json({ success: false, error: error.message || error });
//   }
// });

// // ✅ Complete eSewa payment (callback URL)
// app.get("/complete-payment", async (req, res) => {
//   const { data } = req.query;
//   try {
//     const paymentInfo = await verifyEsewaPayment(data);
//     const purchasedItemData = await PurchasedItem.findById(paymentInfo.response.transaction_uuid);

//     if (!purchasedItemData) {
//       return res.status(404).json({ success: false, message: "Purchase not found" });
//     }

//     const paymentData = await Payment.create({
//       transactionId: paymentInfo.decodedData.transaction_code,
//       orderId: paymentInfo.response.transaction_uuid,
//       productId: paymentInfo.response.transaction_uuid,
//       userId: purchasedItemData.userId,
//       amount: purchasedItemData.totalPrice,
//       items: purchasedItemData.items,
//       dataFromVerificationReq: paymentInfo,
//       paymentGateway: "esewa",
//       status: "success",
//       paymentMethod: "eSewa",
//     });

//     await PurchasedItem.findByIdAndUpdate(paymentInfo.response.transaction_uuid, { status: "completed" });

//     res.json({ success: true, message: "Payment Successful", paymentData });
//   } catch (error) {
//     res.status(500).json({ success: false, message: "An error occurred", error });
//   }
// });

// // ✅ Start the server
// app.listen(3001, () => {
//   console.log("✅ Backend listening at http://localhost:3001");
// });


const express = require("express");
const mongoose = require("mongoose");
const passport = require("passport");
const session = require("express-session");
const dotenv = require("dotenv");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const path = require("path");
const bodyParser = require("body-parser");

const authRoutes = require("./routes/auth.route");
const userRoutes = require("./routes/userRoutes");
const recommendRoutes = require("./routes/recommend");
const orderRoutes = require("./routes/orders");
const cartRoutes = require("./routes/cart");
const paymentRoutes = require("./routes/paymentRoutes");

const connectToMongo = require("./config/db");
const { getEsewaPaymentHash, verifyEsewaPayment } = require("./models/esewa");

const Payment = require("./models/paymentModel");
const Item = require("./models/itemModel");
const PurchasedItem = require("./models/purchasedItemModel");

dotenv.config();
connectToMongo();

const app = express();

const allowedOrigins = ["http://localhost:5173", "http://localhost:3000"];
app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true,
}));

app.use(bodyParser.json());
app.use(express.json({ limit: "10mb" }));
app.use(cookieParser());

app.use(session({
  secret: process.env.SESSION_SECRET || "supersecret",
  resave: false,
  saveUninitialized: false,
  cookie: {
    secure: false,
    httpOnly: true,
    sameSite: "lax",
  },
}));

app.use(passport.initialize());
app.use(passport.session());

app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/recommend", recommendRoutes);
app.use("/api/order", orderRoutes);
app.use("/api/cart", cartRoutes);
app.use("/api/payments", paymentRoutes);

app.get("/esewa", (req, res) => {
  res.sendFile(__dirname + "/test.html");
});

app.post("/initialize-esewa", async (req, res) => {
  try {
    const { items, totalPrice, userId } = req.body;

    if (!items || !items.length) {
      return res.status(400).json({ success: false, message: "No items provided" });
    }

    const purchasedItemData = await PurchasedItem.create({
      items,
      totalPrice,
      userId,
      paymentMethod: "esewa",
      status: "pending",
    });

    const paymentInitate = await getEsewaPaymentHash({
      amount: totalPrice,
      transaction_uuid: purchasedItemData._id.toString(),
    });

    res.json({
      success: true,
      payment: paymentInitate,
      purchasedItemData,
    });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message || error });
  }
});
app.get("/complete-payment", async (req, res) => {
  const { data } = req.query;
  try {
    const paymentInfo = await verifyEsewaPayment(data);
    const purchasedItemData = await PurchasedItem.findById(paymentInfo.response.transaction_uuid);

    if (!purchasedItemData) {
      return res.status(404).json({ success: false, message: "Purchase not found" });
    }

    const paymentData = await Payment.create({
      transactionId: paymentInfo.decodedData.transaction_code,
      orderId: paymentInfo.response.transaction_uuid,
      productId: paymentInfo.response.transaction_uuid,
      userId: purchasedItemData.userId,
      amount: purchasedItemData.totalPrice,
      items: purchasedItemData.items,
      dataFromVerificationReq: paymentInfo,
      paymentGateway: "esewa",
      status: "success",
      paymentMethod: "eSewa",
    });

    await PurchasedItem.findByIdAndUpdate(paymentInfo.response.transaction_uuid, { status: "completed" });

    res.redirect(`${process.env.FRONTEND_URL || "http://localhost:5173"}/payment-success?transaction_uuid=${paymentInfo.response.transaction_uuid}`);
  } catch (error) {
    res.status(500).json({ success: false, message: "An error occurred", error });
  }
});




// app.get("/complete-payment", async (req, res) => {
//   const { data } = req.query;
//   try {
//     const paymentInfo = await verifyEsewaPayment(data);
//     const purchasedItemData = await PurchasedItem.findById(paymentInfo.response.transaction_uuid);

//     if (!purchasedItemData) {
//       return res.status(404).json({ success: false, message: "Purchase not found" });
//     }

//     const paymentData = await Payment.create({
//       transactionId: paymentInfo.decodedData.transaction_code,
//       orderId: paymentInfo.response.transaction_uuid,
//       productId: paymentInfo.response.transaction_uuid,
//       userId: purchasedItemData.userId,
//       amount: purchasedItemData.totalPrice,
//       items: purchasedItemData.items,
//       dataFromVerificationReq: paymentInfo,
//       paymentGateway: "esewa",
//       status: "success",
//       paymentMethod: "eSewa",
//     });

//     await PurchasedItem.findByIdAndUpdate(paymentInfo.response.transaction_uuid, { status: "completed" });

//     res.json({ success: true, message: "Payment Successful", paymentData });
//   } catch (error) {
//     res.status(500).json({ success: false, message: "An error occurred", error });
//   }
// });

app.listen(3001, () => {
  console.log("✅ Backend listening at http://localhost:3001");
});
