const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const transactionSchema = new Schema({
    items: [{ type: Schema.Types.ObjectId, ref: 'Item' }],
    transaction_date: { type: Date, default: Date.now }, // Date object records the date/time down to millisecond
    staff_name: { type: String, required: true}
});

const Transaction = mongoose.model('Transaction', transactionSchema);
module.exports = Transaction;
