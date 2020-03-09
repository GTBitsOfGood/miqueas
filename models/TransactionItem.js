const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TransactionItemSchema = new Schema({
    item: {
      type: Schema.Types.ObjectId,
      ref: 'Item'
    },
    recipient: {
      type: String,
      required: true
    },
    quantityChanged: {
      type: Integer,
      required: true
    },
    expiration_date: {
      type: Integer,
      required: false
    }
});


module.exports = mongoose.models.TransactionItem || mongoose.model('TransactionItem', TransactionItemSchema);
