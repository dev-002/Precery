const express = require("express");
const Item = require("../model/item");
const User = require("../model/user");
const Payment = require("../model/payment");
const { tokenSplit } = require("../utilities/auth");

const router = express.Router();

const addProduct = async (req, res, next) => {
  const data = await tokenSplit(req.cookies.Authorization);
  const product = await Item.find({ _id });
  const user = await User.findOne({ _id: data._id });
  user.cart.push(_id);
  await user.save();
  next();
};

const removeProduct = async (req, res, next) => {
  const data = await tokenSplit(req.cookies.Authorization);
  const product = await Item.find({ _id: id });
  const user = await User.findOne({ _id: data._id }).populate("cart");
  user.cart = user.cart.filter((_id) => _id._id.toString() !== id);
  await user.save();
  next();
};

router.get("/", async (req, res) => {
  const data = await tokenSplit(req.cookies.Authorization);
  const user = await User.findOne({ _id: data._id }).populate("cart");
  let products = user.cart || [];
  let sum = 0;
  products.forEach((product) => {
    sum += product.price;
  });
  res.render("cart/cart", { products, user, sum });
});

router.post("/add/:_id", addProduct, async (req, res) => {
  res.redirect("/");
});

router.post("/remove/:_id", removeProduct, async (req, res) => {
  res.redirect("/cart");
});

router.get("/checkout", (req, res) => {
  res.render("cart/checkout");
});

router.post("/checkout/payment", async (req, res) => {
  const paymentInfo = req.body.payment;
  const data = await tokenSplit(req.cookies.Authorization);
  const payment = await Payment.create({ ...paymentInfo, placedBy: data._id });
  const user = await User.findOne({ _id: data._id });
  user.payment.push(payment._id);
  await user.save();
  res.render("payment/payment");
});

router.post("/checkout/payment/confirm", async (req, res) => {
  const payment = req.body.payment;
  const data = await tokenSplit(req.cookies.Authorization);
  const user = await User.findOne({ _id: data._id });
  user.cardDetails.push(payment);
  await user.save();
  const userUpdated = await User.findOne({ _id: data._id })
    .populate("payment")
    .populate("cardDetails");
  res.render("payment/paymentConfirm");
});

router.post("/checkout/payment/confirm/redirect", async (req, res) => {
  const data = await tokenSplit(req.cookies.Authorization);
  const user = await User.findOne({ _id: data._id });
  user.cart.splice(0);
  await user.save();
  res.redirect("/");
});

module.exports = router;
