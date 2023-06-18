const express = require("express");

const router = express.Router();

router.get("/fruits", (req, res) => {
  res.render("categories/fruits");
});

router.get("/babycare", (req, res) => {
  res.render("categories/babycare");
});

router.get("/office", (req, res) => {
  res.render("categories/office");
});

router.get("/medicine", (req, res) => {
  res.render("categories/medicine");
});

router.get("/beauty", (req, res) => {
  res.render("categories/beauty");
});

router.get("/gardening", (req, res) => {
  res.render("categories/gardening");
});

module.exports = router;
