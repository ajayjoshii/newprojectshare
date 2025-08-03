// // // middlewares/authMiddleware.js
// // const jwt = require("jsonwebtoken");
// // const User = require("../models/User");

// // exports.authMiddleware = async (req, res, next) => {
// //   const token = req.headers.authorization?.split(" ")[1]; // Bearer token

// //   if (!token) return res.status(401).json({ message: "No token provided" });

// //   try {
// //     const decoded = jwt.verify(token, process.env.JWT_SECRET);
// //     req.user = { id: decoded.id };
// //     next();
// //   } catch (err) {
// //     res.status(401).json({ message: "Invalid token" });
// //   }
// // };

// //original code 
// const jwt = require("jsonwebtoken");
// const JWT_SECRET = process.env.JWT_SECRET || "secretkey";

// const authMiddleware = (req, res, next) => {
//   const token = req.header("x-auth-token");
//   if (!token) return res.status(401).json({ msg: "No token, authorization denied" });

//   try {
//     const decoded = jwt.verify(token, JWT_SECRET);
//     req.user = decoded;
//     next();
//   } catch {
//     res.status(401).json({ msg: "Token is not valid" });
//   }
// };

// module.exports = { authMiddleware };

const jwt = require("jsonwebtoken");
const JWT_SECRET = process.env.JWT_SECRET || "your_jwt_secret";

exports.authMiddleware = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ msg: "No token, authorization denied" });
  }
  const token = authHeader.split(" ")[1];
  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded;
    next();
  } catch {
    res.status(401).json({ msg: "Token is not valid" });
  }
};
