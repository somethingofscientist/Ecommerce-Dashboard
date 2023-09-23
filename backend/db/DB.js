const mongoose = require('mongoose');

const connectDB = async (req, res) => {
    try {
        mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        console.log('Connected To DB');
    } catch (error) {
        console.error('MongoDB connection error:', error.message);
        res.status(500).json({ error: 'Failed to connect to MongoDB' });
    }
}

module.exports = connectDB;