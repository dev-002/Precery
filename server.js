if (process.env.NODE !== "production") {
  require("dotenv").config();
}

const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));
app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded({ extended: true }));

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

app.use("/", homeRouter);
app.use("/feedback", feedbackRouter);
app.use("/contact", contactRouter);
app.use("/about", aboutRouter);
app.use("/auth", authRouter);
app.use("/cart", cartRouter);
app.use("/wishlist", wishlistRouter);
app.use("/profile", profileRouter);
app.use("/categories", categoriesRouter);

app.get("/deals", (req, res) => {
  res.render("deals/bestDeals");
});

app.listen(process.env.PORT, console.log("Server started..."));
