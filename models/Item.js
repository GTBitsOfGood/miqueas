import mongoose from 'mongoose';

const { Schema } = mongoose;

const ItemSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    quantityChanged: {
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
    typeColor: { //type/color
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
    },
    recipient: {
      type: [String],
      required: true
    }
});

export default mongoose.models.Item || mongoose.model('Item', ItemSchema);
