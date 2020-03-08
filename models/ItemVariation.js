const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ItemVariationSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    gender: {
        type: [String]
    },
    size: {
        type: [String]
    },
    typeColor: {
        type: [String]
    }
});

//const ItemVariation = mongoose.model('ItemVariation', ItemVariationSchema);

export default mongoose.models.ItemVariation || mongoose.model('ItemVariation', ItemVariationSchema); 
