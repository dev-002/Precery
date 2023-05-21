const mongoose = require('mongoose');
const { Schema } = mongoose.Schema;

const itemSchema = new Schema({
    fruit: [
        { type: mongoose.Types.ObjectId, ref: 'fruit' }
    ],
    vegetable: [
        { type: mongoose.Types.ObjectId, ref: 'vegetable' }
    ]

});

module.exports = mongoose.model('item', itemSchema);