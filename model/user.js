const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
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
  wishlist: [{ type: Schema.Types.ObjectId, ref: "Item" }],
  cart: [{ type: Schema.Types.ObjectId, ref: "Item" }],
});

module.exports = mongoose.model("User", userSchema);
