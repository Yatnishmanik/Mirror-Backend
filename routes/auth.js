const express = require("express");
const router = express.Router();
const User = require("../models/User");
const bcrypt = require("bcryptjs");

/* SIGNUP */
router.post("/signup", async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ msg: "Missing fields" });
    }

    // const exist = await User.findOne({ email});
    // if (exist) {
    //   return res.status(400).json({ msg: "User already exists" });
    // }
    await User.create({
      email,
      password: password,
    });
    res.status(201).json({ msg: "User registered successfully" });

  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Server error" });
  }
});

module.exports = router;
