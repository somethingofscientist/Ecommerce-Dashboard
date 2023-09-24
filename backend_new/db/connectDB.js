const mongoose = require('mongoose');
const dotenv = require('dotenv').config();

const connectedDB = () => {
    mongoose.connect(process.env.MONGO_URI)
        .then(() => {
            console.log('Connected');
        })
        .catch((e) => {
            console.log('Error in Connecting');
        })
}

module.exports = connectedDB;