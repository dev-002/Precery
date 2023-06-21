const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.render("profile/profile");
});

router.get("/logout", (req, res) => {
  res.clearCookie("Authorization");
  res.redirect("/");
});

module.exports = router;
