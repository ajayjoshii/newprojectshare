const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const path = require("path");

exports.register = async (req, res) => {
  const { name, email, password, address } = req.body;
  const hashed = await bcrypt.hash(password, 10);
  const user = await User.create({ name, email, password: hashed, address });
  res.json({ message: "User registered" });
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) return res.status(400).json({ message: "User not found" });

  const match = await bcrypt.compare(password, user.password);
  if (!match) return res.status(400).json({ message: "Invalid password" });

  const token = jwt.sign({ id: user._id }, "your_jwt_secret");
  res.json({ token, user });
};

exports.getProfile = async (req, res) => {
  const user = await User.findById(req.user.id);
  res.json(user);
};

// exports.uploadImage = async (req, res) => {
//   const imagePath = `/uploads/${req.file.filename}`;
//   const user = await User.findByIdAndUpdate(
//     req.user.id,
//     { profileImage: imagePath },
//     { new: true }
//   );
//   res.json({ profileImage: user.profileImage });
// };


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

exports.resetPassword = async (req, res) => {
  const { currentPassword, newPassword } = req.body;
  const user = await User.findById(req.user.id);

  const isMatch = await bcrypt.compare(currentPassword, user.password);
  if (!isMatch) return res.status(400).json({ message: "Incorrect password" });

  user.password = await bcrypt.hash(newPassword, 10);
  await user.save();
  res.json({ message: "Password updated" });
};
