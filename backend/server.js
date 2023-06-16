if (process.env.NODE !== "production") {
  require("dotenv").config();
}

const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
// Data Models
const Fruit = require("./model/items/fruit");
const Vegetable = require("./model/items/vegetable");
// Fake Data
const { vegetable: vegeSeed, fruit: fruitSeed } = require("./utilities/seed");

const app = express();

const corsOption = {
  // origin: "http://localhost:3000/",
  origin: "*",
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};
app.use(cors(corsOption));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));
app.use(express.static("public"));
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
const loginRouter = require("./routes/login");

app.use("/", homeRouter);
app.use("/login", loginRouter);
// Route to enter the fake data
app.get("/seed", async (req, res) => {
  const fruit = await Fruit.insertMany(fruitSeed);
  // await fruit.save();
  const vegetable = await Vegetable.insertMany(vegeSeed);
  // await vegetable.save();
  res.redirect("/");
});

app.listen(process.env.PORT, console.log("Server started..."));
