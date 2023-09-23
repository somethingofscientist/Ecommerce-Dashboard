const cors = require('cors');
const express = require('express');
const dotenv = require('dotenv');
const app = express();
dotenv.config();

const connectDB = require('./db/DB')
const routes = require('./router/router');



// middlewares
app.use(express.json());
const corsOptions = {
    origin: 'http://localhost:3000', // Replace with your frontend origin
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    optionsSuccessStatus: 204,
};

app.use(cors(corsOptions));
app.use('/', routes)




connectDB();
app.listen(process.env.PORT, () => {
    console.log(`server is running at ${process.env.PORT}`)
})