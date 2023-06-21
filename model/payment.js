const mongoose = require("mongoose");
const { Schema } = mongoose;

const paymentSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  locality: {
    type: String,
    required: true,
  },
  pincode: {
    type: Number,
    required: true,
  },
  contact: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    required: true,
    default: Date.now(),
  },
  placedBy: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});

module.exports = mongoose.model("Payment", paymentSchema);
