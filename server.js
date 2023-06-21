if (process.env.NODE !== "production") {
  require("dotenv").config();
}

const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));
app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

// Database
mongoose.connect(process.env.MONGODB_URL);
// const db = mongoose.connection;
// db.once('open', () => {
//     console.log("Database connected");
// });
// db.on('close', (error) => console.log(error));

// Routes
const homeRouter = require("./routes/home");
const feedbackRouter = require("./routes/feedback");
const aboutRouter = require("./routes/aboutUs");
const contactRouter = require("./routes/contact");
const authRouter = require("./routes/auth");
const cartRouter = require("./routes/cart");
const wishlistRouter = require("./routes/wishlist");
const profileRouter = require("./routes/profile");
const categoriesRouter = require("./routes/categories");
const { verifyUser, checkTokenExpiration } = require("./utilities/auth");

app.use("/", homeRouter);
app.use("/about", aboutRouter);
app.use("/auth", authRouter);
app.use("/feedback", checkTokenExpiration, verifyUser, feedbackRouter);
app.use("/contact", checkTokenExpiration, verifyUser, contactRouter);
app.use("/cart", checkTokenExpiration, verifyUser, cartRouter);
app.use("/wishlist", checkTokenExpiration, verifyUser, wishlistRouter);
app.use("/profile", checkTokenExpiration, verifyUser, profileRouter);
app.use("/categories", categoriesRouter);

app.get("/deals", (req, res) => {
  res.render("deals/bestDeals");
});

app.listen(process.env.PORT, console.log("Server started..."));
