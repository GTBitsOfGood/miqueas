const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ExampleSchema = new Schema({
    property1: {
        type: Number,
        required: true
    },
    property2: {
        type: String,
        required: true,
    }
});

const Example = mongoose.model('Example', ExampleSchema);

module.exports = Example;
