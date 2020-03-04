const mongoose = require('mongoose');

const { Schema } = mongoose;

const ItemSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    stock: { //amount of item currently in the inventory
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
    size: { //small, large, etc.
        type: String,
        required: false,
    },
    location: { //downstairs, bodega, closet, etc.
        type: String,
        required: true,
    },
    reorder_level: {
        type: Number,
        required: true,
        validate : {
            validator : Number.isInteger,
            message   : '{VALUE} is not an integer value'
          }
    }
});
ItemSchema.index({'$**': 'text'});

export default mongoose.models.Item || mongoose.model('Item', ItemSchema);
