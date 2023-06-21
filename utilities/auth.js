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
    const data = await tokenSplit(bearerToken);
    const user = await User.findOne({ _id: data._id });
    if (user) next();
    // User is not valid
    else res.redirect("/auth/login");
  } else {
    // Token is not valid
    res.redirect("/auth/login");
  }
};

async function tokenSplit(bearerToken) {
  const token = bearerToken.split(" ")[1];
  const data = jwt.verify(token, process.env.TOKEN_SECRET);
  return data;
}

module.exports.tokenSplit = tokenSplit;

module.exports.checkTokenExpiration = (req, res, next) => {
  const token = req.cookies.Authorization;
  if (token) {
    try {
      const decoded = jwt.verify(token.split(" ")[1], process.env.TOKEN_SECRET);
      // Check if token has expired
      if (decoded.exp < Date.now() / 1000) {
        // Token has expired, redirect to login page
        return res.redirect("/auth/login");
      }

      // Token is valid, continue to the next middleware
      next();
    } catch (error) {
      // Error verifying token, redirect to login page
      return res.redirect("/auth/login");
    }
  } else {
    // Token is missing, redirect to login page
    res.redirect("/auth/login");
  }
};
