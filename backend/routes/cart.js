const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.render("cart/cart");
});

router.get("/checkout", (req, res) => {
  res.render("cart/checkout");
});

router.get("/checkout/payment", (req, res) => {
  res.render("payment/payment");
});

router.get("/checkout/payment/confirm", (req, res) => {
  res.render("payment/paymentConfirm");
});

module.exports = router;
