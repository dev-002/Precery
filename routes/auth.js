const express = require("express");
const bcrypt = require("bcrypt");
const User = require("../model/user");
const { setUser, verifyUser } = require("../utilities/auth");

const router = express.Router();

router.get("/register", (req, res) => {
  res.render("LoginAndRegister/LoginAndRegister");
});

router.get("/login", (req, res) => {
  res.render("LoginAndRegister/LoginAndRegister");
});

router.post("/register", setUser, async (req, res) => {
  const user = req.body.user;
  const hashedPass = await bcrypt.hash(user.password, 10);
  const newUser = new User({ ...user, password: hashedPass });
  await newUser.save();
  res.redirect("/");
});

router.post("/login", setUser, async (req, res) => {
  const user = await User.findOne({ email: req.body.user.email });
  if (user && bcrypt.compare(req.body.user.password, user.password)) {
    res.redirect("/");
  } else {
    res.redirect("/auth/login");
  }
});

module.exports = router;
