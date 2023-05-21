const mongoose = require('mongoose');
const { Schema } = mongoose;

const fruitSchema = new Schema({
    name: String,
    price: Number
});

module.exports = mongoose.model('fruit', fruitSchema);