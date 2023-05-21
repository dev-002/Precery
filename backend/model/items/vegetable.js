const mongoose = require('mongoose');
const {Schema} = mongoose;

const vegetableSchema = new Schema({
    name: String,
    price: Number
});

module.exports = mongoose.model('vegetable', vegetableSchema);