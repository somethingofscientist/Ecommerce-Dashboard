const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is required'],
    },
    price: {
        type: Number,
        required: [true, 'Name is required'],
    },
    description: {
        type: String,
        required: [true, 'Name is required'],
    },
})

module.exports = mongoose.model('products', productSchema);