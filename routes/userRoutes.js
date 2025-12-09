// routes/userRoutes.js
const express = require("express");
const User = require("../models/User");
const router = express.Router();
const bcrypt = require("bcrypt");


// GET /api/users
router.get("/", async (req, res) => {
  try {
    const users = await User.find().select("-password");
    res.json(users);
  } catch (err) {
    console.error("Get users error:", err);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
