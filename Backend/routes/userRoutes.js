// const express = require("express");
// const auth = require("../middleware/auth");
// const User = require("../models/User");
// const {
//   register,
//   login,
//   getProfile,
//   uploadImage,
//   resetPassword,
//   forgotPassword,
// } = require("../controllers/userController");
// const auth = require("../middleware/auth");
// const upload = require("../middleware/upload");

// const router = express.Router();

// router.post("/register", register);

// router.post("/order", async (req, res) => {
//   const { userId, items, province } = req.body;
//   const user = await User.findById(userId);
//   user.orders.push({ items, province, orderDate: new Date() });
//   await user.save();
//   res.status(200).json({ message: "Order saved" });
// });
// router.post("/login", login);
// router.get("/profile", auth, getProfile);
// router.post("/upload-image", auth, upload.single("profileImage"), uploadImage);
// router.post("/reset-password", auth, resetPassword);
// router.post("/forgot-password", forgotPassword);

// module.exports = router;




const express = require("express");
const auth = require("../middleware/auth");
const upload = require("../middleware/upload");
const {
  register,
  login,
  getProfile,
  uploadImage,
  resetPassword,
} = require("../controllers/userController");

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/profile", auth, getProfile);
router.post("/upload-image", auth, upload.single("profileImage"), uploadImage);
router.post("/reset-password", auth, resetPassword);

module.exports = router;

