const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TransactionSchema = new Schema({
    items: {
      type: [Schema.Types.ObjectId],
      ref: 'TransactionItem'
    },
    transaction_date: { type: Date, default: Date.now }, // Date object records the date/time down to millisecond
    staff_name: { type: String, required: true}
});


module.exports = mongoose.models.Transaction || mongoose.model('Transaction', TransactionSchema);
