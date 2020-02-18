const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ItemSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    gender: { // boy/girl
        type: String,
        required: false,
    },
    variation: { //type/color
        type: String,
        required: false,
    },
    expiration_date: {
        type: Date,
        required: false,
    },
    size: { //small, large, etc.
        type: String,
        required: false,
    },
    location: { //downstairs, bodega, closet, etc.
        type: String,
        required: true,
    },
    date_checked: {
        type: Date,
        required: true,
    },
    original_stock: {
        type: Number,
        required: true
    }
});

const Item = mongoose.model('Item', ItemSchema);

module.exports = Item;
