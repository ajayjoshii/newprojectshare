// const bcrypt = require("bcrypt");
// const jwt = require("jsonwebtoken");
// const User = require("../models/User");
// const path = require("path");

// const generateToken = (userId) => {
//   return jwt.sign({ id: userId }, process.env.JWT_SECRET, { expiresIn: "7d" });
// };


// exports.register = async (req, res) => {
//   const { name, email, password, address } = req.body;
//   const hashed = await bcrypt.hash(password, 10);
//   const user = await User.create({ name, email, password: hashed, address });
//   res.json({ message: "User registered" });
// };


// exports.getProfile = async (req, res) => {
//   const user = await User.findById(req.user.id);
//   res.json(user);
// };

// // exports.uploadImage = async (req, res) => {
// //   const imagePath = `/uploads/${req.file.filename}`;
// //   const user = await User.findByIdAndUpdate(
// //     req.user.id,
// //     { profileImage: imagePath },
// //     { new: true }
// //   );
// //   res.json({ profileImage: user.profileImage });
// // };


// exports.uploadImage = async (req, res) => {
//   if (!req.file) {
//     return res.status(400).json({ message: "No file uploaded" });
//   }
//   const imagePath = `/uploads/${req.file.filename}`;
//   const user = await User.findByIdAndUpdate(
//     req.user.id,
//     { profileImage: imagePath },
//     { new: true }
//   );
//   res.json({ profileImage: user.profileImage });
// };

// exports.resetPassword = async (req, res) => {
//   const { currentPassword, newPassword } = req.body;
//   const user = await User.findById(req.user.id);

//   const isMatch = await bcrypt.compare(currentPassword, user.password);
//   if (!isMatch) return res.status(400).json({ message: "Incorrect password" });

//   user.password = await bcrypt.hash(newPassword, 10);
//   await user.save();
//   res.json({ message: "Password updated" });
// };




// exports.login = async (req, res) => {
//   const { email, password } = req.body;
//   const user = await User.findOne({ email });
//   if (!user) return res.status(400).json({ message: "User not found" });

//   const match = await bcrypt.compare(password, user.password);
//   if (!match) return res.status(400).json({ message: "Invalid password" });

//   const token = jwt.sign({ id: user._id }, "your_jwt_secret");
//   res.json({ token, user });
// };


const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const path = require("path");

// Token generator
const generateToken = (userId) => {
  return jwt.sign({ id: userId }, process.env.JWT_SECRET, { expiresIn: "7d" });
};

// ---------------- REGISTER ----------------
// exports.register = async (req, res) => {
//   try {
//     const { name, email, password, address } = req.body;

//     const existingUser = await User.findOne({ email });
//     if (existingUser)
//       return res.status(400).json({ message: "Email already in use" });

//     const hashed = await bcrypt.hash(password, 10);

//     const user = await User.create({
//       name,
//       email,
//       password: hashed,
//       address,
//     });

//     const token = generateToken(user._id);

//     res.json({
//       user: {
//         _id: user._id,
//         name: user.name,
//         email: user.email,
//         address: user.address,
//         token, // ✅ token included here
//       },
//     });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ message: "Registration failed" });
//   }
// };

exports.register = async (req, res) => {
  try {
    const { name, email, password, address } = req.body;

    const existing = await User.findOne({ email });
    if (existing) return res.status(400).json({ message: "User already exists" });

    const hashed = await bcrypt.hash(password, 10);
    const user = await User.create({ name, email, password: hashed, address });

    // ✅ Generate JWT token
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET || "your_jwt_secret", {
      expiresIn: "7d",
    });

    res.json({
      user: {
        _id: user._id,
        name: user.name,
        email: user.email,
        address: user.address,
        token, // ✅ return token
      },
    });
  } catch (err) {
    console.error("Register Error:", err.message);
    res.status(500).json({ message: "Server error" });
  }
};


// ---------------- LOGIN ----------------
// exports.login = async (req, res) => {
//   try {
//     const { email, password } = req.body;

//     const user = await User.findOne({ email });
//     if (!user)
//       return res.status(400).json({ message: "User not found" });

//     const match = await bcrypt.compare(password, user.password);
//     if (!match)
//       return res.status(400).json({ message: "Invalid password" });

//     const token = generateToken(user._id);

//     res.json({
//       user: {
//         _id: user._id,
//         name: user.name,
//         email: user.email,
//         address: user.address,
//         token, // ✅ token included here
//       },
//     });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ message: "Login failed" });
//   }
// };

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: "User not found" });

    const match = await bcrypt.compare(password, user.password);
    if (!match) return res.status(400).json({ message: "Invalid password" });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET || "your_jwt_secret", {
      expiresIn: "7d",
    });

    res.json({
      user: {
        _id: user._id,
        name: user.name,
        email: user.email,
        address: user.address,
        token, // ✅ include token here too
      },
    });
  } catch (err) {
    console.error("Login Error:", err.message);
    res.status(500).json({ message: "Server error" });
  }
};


// ---------------- GET PROFILE ----------------
exports.getProfile = async (req, res) => {
  const user = await User.findById(req.user.id);
  res.json(user);
};

// ---------------- IMAGE UPLOAD ----------------
exports.uploadImage = async (req, res) => {
  if (!req.file) {
    return res.status(400).json({ message: "No file uploaded" });
  }
  const imagePath = `/uploads/${req.file.filename}`;
  const user = await User.findByIdAndUpdate(
    req.user.id,
    { profileImage: imagePath },
    { new: true }
  );
  res.json({ profileImage: user.profileImage });
};

// ---------------- RESET PASSWORD ----------------
exports.resetPassword = async (req, res) => {
  const { currentPassword, newPassword } = req.body;
  const user = await User.findById(req.user.id);

  const isMatch = await bcrypt.compare(currentPassword, user.password);
  if (!isMatch)
    return res.status(400).json({ message: "Incorrect password" });

  user.password = await bcrypt.hash(newPassword, 10);
  await user.save();
  res.json({ message: "Password updated" });
};
