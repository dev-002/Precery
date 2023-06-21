const mongoose = require("mongoose");
const { Schema } = mongoose;

const cardSchema = new Schema({
  cardNumber: Number,
  cardName: String,
  cvv: Number,
  expiryMM: Number,
  expiryYY: Number,
});

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
  payment: [{ type: Schema.Types.ObjectId, ref: "Payment" }],
  cardDetails: [
    {
      type: cardSchema,
    },
  ],
});

module.exports = mongoose.model("User", userSchema);
