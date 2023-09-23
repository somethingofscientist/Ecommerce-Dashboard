const express = require('express');
const dotenv = require('dotenv');
const router = require('./router/router');
const connectDB = require('./db/DB')
dotenv.config();
const app = express();

// middlewares
app.use(express.json());
// app.use('/api/v1', router)

app.get('/', (req, res) => {
    res.status(200).json({
        success: true,
        message: "API Working"
    })
})

connectDB();
app.listen(process.env.PORT, () => {
    console.log(`server is running at ${process.env.PORT}`)
})