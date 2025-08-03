const express = require("express");
const passport = require("passport");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const crypto = require('crypto');
const nodemailer = require('nodemailer');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const JWT_SECRET = process.env.JWT_SECRET || 'secretkey';

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const dir = './uploads/profileImages';
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
    cb(null, dir);
  },
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    cb(null, req.user.id + ext); // name image file by user id
  }
});
const upload = multer({ storage });


router.post('/register', async (req, res) => {
  try {
    const { name, email, password, address, phone } = req.body;
    if (!name || !email || !password || !address || !phone)
      return res.status(400).json({ msg: 'Missing fields' });

    const existingUser = await User.findOne({ email });
    if (existingUser)
      return res.status(400).json({ msg: 'Email already registered' });

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      name,
      email,
      password: hashedPassword,
      address,
      phone,
    });
    await newUser.save();

    const userToSend = {
      id: newUser._id,
      name: newUser.name,
      email: newUser.email,
      address: newUser.address,
      phone: newUser.phone,
      profileImage: newUser.profileImage || null,
    };

    // Optional: Generate token and set cookie or return it
    const token = jwt.sign({ id: newUser._id }, JWT_SECRET, { expiresIn: "1d" });

    res.status(201).json({ msg: "User registered successfully", user: userToSend, token });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
});


// Login
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) return res.status(400).json({ msg: 'Missing fields' });

    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ msg: 'Invalid credentials' });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ msg: 'Invalid credentials' });

    // Create JWT token
    const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: '1d' });

    res.json({
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        address: user.address,
        profileImage: user.profileImage,
      },
    });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
});

// Middleware to authenticate user by JWT
const authMiddleware = (req, res, next) => {
  const token = req.header('x-auth-token');
  if (!token) return res.status(401).json({ msg: 'No token, authorization denied' });

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded;
    next();
  } catch {
    res.status(401).json({ msg: 'Token is not valid' });
  }
};



// Get profile info
router.get('/profile', authMiddleware, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-password -resetPasswordToken -resetPasswordExpires');
    if (!user) return res.status(404).json({ msg: 'User not found' });
    res.json(user);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
});

// Update profile info + upload profile image
router.put('/profile', authMiddleware, upload.single('profileImage'), async (req, res) => {
  try {
    const { name, address } = req.body;
    const user = await User.findById(req.user.id);

    if (!user) return res.status(404).json({ msg: 'User not found' });

    if (name) user.name = name;
    if (address) user.address = address;

    if (req.file) {
      // Save path relative to uploads folder
      user.profileImage = `/uploads/profileImages/${req.file.filename}`;
    }

    await user.save();
    res.json({ msg: 'Profile updated', profileImage: user.profileImage });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
});

// Forgot password - send reset email
router.post('/forgot-password', async (req, res) => {
  try {
    const { email } = req.body;
    if (!email) return res.status(400).json({ msg: 'Email required' });

    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ msg: 'No user with that email' });

    // Create reset token
    const token = crypto.randomBytes(20).toString('hex');

    user.resetPasswordToken = token;
    user.resetPasswordExpires = Date.now() + 3600000; // 1 hour

    await user.save();

    // Setup Nodemailer transporter (configure with your SMTP/email service)
    const transporter = nodemailer.createTransport({
      service: 'Gmail', // or another email service
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const resetUrl = `${process.env.CLIENT_URL}/reset-password/${token}`;

    const mailOptions = {
      to: user.email,
      from: process.env.EMAIL_USER,
      subject: 'Password Reset',
      text: `You requested a password reset. Click here to reset: ${resetUrl}`,
    };

    await transporter.sendMail(mailOptions);

    res.json({ msg: 'Password reset email sent' });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
});

// Reset password - user clicks link and posts new password
router.post('/reset-password/:token', async (req, res) => {
  try {
    const user = await User.findOne({
      resetPasswordToken: req.params.token,
      resetPasswordExpires: { $gt: Date.now() },
    });

    if (!user) return res.status(400).json({ msg: 'Invalid or expired token' });

    const { password } = req.body;
    if (!password) return res.status(400).json({ msg: 'Password required' });

    user.password = await bcrypt.hash(password, 10);
    user.resetPasswordToken = undefined;
    user.resetPasswordExpires = undefined;

    await user.save();

    res.json({ msg: 'Password reset successful' });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
});


module.exports = router;












