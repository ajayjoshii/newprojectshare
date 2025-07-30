// const express = require("express");
// const session = require("express-session");
// const passport = require("passport");
// const dotenv = require("dotenv");
// const connectDb = require("./config/db"); // ✅ Your DB file

// dotenv.config();

// const app = express();
// connectDb(); // ✅ CONNECT TO MONGO FIRST

// require("./config/passport"); // ✅ Setup passport AFTER DB is connected

// app.use(express.json());
// app.use(
//   session({
//     secret: process.env.SESSION_SECRET || "keyboard cat",
//     resave: false,
//     saveUninitialized: false,
//   })
// );
// app.use(passport.initialize());
// app.use(passport.session());

// // Routes
// app.use("/auth", require("./routes/authRoutes"));

// app.get("/", (req, res) => {
//   res.send("✅ Server is running");
// });

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));










// const express = require("express");
// const mongoose = require("mongoose");
// const passport = require("passport");
// const session = require("express-session");
// const dotenv = require("dotenv");
// const cors = require("cors");
// const cookieParser = require("cookie-parser");
// const authRoutes = require("./routes/auth.route");
// const connectDb = require("./config/db"); 
// const path = require('path');
// const userRoutes = require("./routes/userRoutes");
// const recommendRoutes = require("./routes/recommend");
// const orderRoutes = require("./routes/order");

// require("./config/passport");

// dotenv.config();

// const app = express();

// connectDb();

// // MongoDB Connection
// mongoose.connect(process.env.MONGO_URL, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// })
// .then(() => console.log("✅ MongoDB connected"))
// .catch((err) => console.error("❌ MongoDB error:", err));

// // Middleware
// app.use(cors({
//   origin: "http://localhost:3000",
//   credentials: true
// }));
// app.use(express.json({ limit: '10mb' }));
// app.use("/api/order", orderRoutes);


// app.use(cookieParser());

// // Session Setup
// app.use(session({
//   secret: process.env.SESSION_SECRET, // replace with strong secret in production
//   resave: false,
//   saveUninitialized: false,
// }));
// app.use("/api/recommend", recommendRoutes);

// // Passport Init
// app.use(passport.initialize());
// app.use(passport.session());

// // Routes
// app.use("/api/auth", authRoutes);
// app.use("/api/users", userRoutes);

// app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// // Default
// app.get("/", (req, res) => {
//   res.send("Server running with Google/Facebook OAuth");
// });
// // Inside index.js or routes/auth.js
// app.get('/api/auth/google',
//   passport.authenticate('google', { scope: ['profile', 'email'] })
// );

// // Start Server
// app.listen(process.env.PORT || 5000, () => {
//   console.log('Server started on port', process.env.PORT || 5000);
// });



const express = require("express");
const mongoose = require("mongoose");
const passport = require("passport");
const session = require("express-session");
const dotenv = require("dotenv");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const path = require("path");

// Custom files
const authRoutes = require("./routes/auth.route");
const userRoutes = require("./routes/userRoutes");
const recommendRoutes = require("./routes/recommend");
const orderRoutes = require("./routes/order");
const connectDb = require("./config/db");
require("./config/passport");

dotenv.config(); // Load env variables

const app = express();

// Connect to MongoDB (custom connection file)
connectDb();

// Redundant direct Mongoose connection (optional but you included both)
mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.error("❌ MongoDB error:", err));

// Middleware

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


app.use(express.json({ limit: "10mb" }));
app.use(cookieParser());

// Express session
app.use(session({
  secret: process.env.SESSION_SECRET || "supersecret", // Replace in .env
  resave: false,
  saveUninitialized: false,
}));

// Passport
app.use(passport.initialize());
app.use(passport.session());

// Static file serving (profile images)
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/recommend", recommendRoutes);
app.use("/api/order", orderRoutes);
app.use("/api/cart", require("./routes/cart"));
app.use("/api/payment", require("./routes/payment"));


// Test route
app.get("/", (req, res) => {
  res.send("Server running with Google/Facebook OAuth and MERN profile support");
});

// Google Auth initiation route (make sure it matches callback in config)
app.get("/api/auth/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server started on port ${PORT}`);
});


