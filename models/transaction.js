const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const transactionSchema = new Schema({
    name: { type: Number, required: true },
    category: { type: String, required: true },
    boy_or_girl: String,
    type_and_color: String,
    size: String,
    transaction_date: { type: Date, default: Date.now }, // Date object records the date/time down to millisecond      
    location: { type: String, required: true },
    staff_name: { type: String, required: true},
    quantity_change: { type: Number, required: true },
    recipient: String,
});

const Transaction = mongoose.model('Transaction', transactionSchema);
module.exports = Transaction;

