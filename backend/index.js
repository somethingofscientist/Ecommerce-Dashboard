const connectDB = require('./db/DB')
const dotenv = require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const routes = require('./router/router');


// middlewares
app.use(cors());
app.use(express.json());
app.use('/', routes);


// database
connectDB();
app.listen(process.env.PORT, () => {
    console.log(`server is running at ${process.env.PORT}`)
})