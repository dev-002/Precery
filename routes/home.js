const express = require("express");
const Item = require("../model/item");
const User = require("../model/user");
const url = require("url");
const { tokenSplit } = require("../utilities/auth");

const router = express.Router();

router.get("/", async (req, res) => {
  const products = await Item.find({ category: "Fruit" });
  const bundle = await Item.find({ category: "Bundle" });
  if (req.cookies.Authorization) {
    const data = await tokenSplit(req.cookies.Authorization);
    const user = await User.findOne({ _id: data._id });
    if (user) {
      let cartItem = user.cart.length;
      let wishlistItem = user.wishlist.length;
      res.render("home/home", {
        products,
        bundle,
        user: { name: "Devansh" },
        wishlistItem,
        cartItem,
      });
    } else {
      res.json({
        data,
        user,
        error: "User is not found",
      });
    }
  } else {
    res.render("home/home", { products, bundle, wishlistItem: 0, cartItem: 0 });
  }
});

router.get("/search", async (req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const query = parsedUrl.query;
  const products = await Item.find({
    $or: [
      { name: { $regex: query, $options: "i" } }, // Match name field with query
      { category: { $regex: query, $options: "i" } }, // Match category field with query
    ],
  });
  const user = await User.findOne({ name: "Devansh" });
  let cartItem = user.cart.length;
  let wishlistItem = user.wishlist.length;
  res.render("home/searchResult", {
    products,
    user: { name: "Devansh" },
    wishlistItem,
    cartItem,
  });
});

module.exports = router;
