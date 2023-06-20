const jwt = require("jsonwebtoken");
const User = require("../model/user");

module.exports.setUser = async (req, res, next) => {
  const user = await User.findOne({ email: req.body.user.email });
  if (user) {
    const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET, {
      expiresIn: "1h",
    });
    res.cookie("Authorization", "Bearer " + token);
    next();
  } else {
    res.redirect("/auth/login");
  }
};

module.exports.verifyUser = async (req, res, next) => {
  const bearerToken = req.cookies.Authorization;
  if (bearerToken) {
    const token = bearerToken.split(" ")[1];
    const data = jwt.verify(token, process.env.TOKEN_SECRET);
    const user = await User.findOne({ _id: data._id });
    if (user) next();
    // User is not valid
    else res.redirect("/auth/login");
  } else {
    // Token is not valid
    res.redirect("/auth/login");
  }
};
