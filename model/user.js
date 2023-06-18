const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  // birthDate: Date,
  // gender: {
  //     type: String,
  //     enum: ["Male", "Female"]
  // },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
    unique: true,
  },
  phone: Number,
});

module.exports = mongoose.model("User", userSchema);
