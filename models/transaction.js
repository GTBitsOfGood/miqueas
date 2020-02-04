/* eslint-disable no-unused-vars */
/* eslint-disable indent */
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TransactionSchema = new Schema({
    property1: {
        type: Number,
        required: true
    },
    property2: {
        type: String,
        required: true,
    }
});

const Transaction = mongoose.model('Transaction', TransactionSchema);
module.exports = Transaction;

