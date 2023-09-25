const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is required'],
    },
    userId: {
        type: String,
        // required: [true, 'Name is required'],
    },
    price: {
        type: Number,
        required: [true, 'Price is required'],
    },
    category: {
        type: String,
        required: [true, 'Category is required'],
    },
    company: {
        type: String,
        required: [true, 'Company is required'],
    },
})

module.exports = mongoose.model('products', productSchema);