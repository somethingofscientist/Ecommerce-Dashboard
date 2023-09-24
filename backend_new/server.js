const express = require('express');
const dotenv = require('dotenv').config();
const cors = require('cors');
const app = express();
const connectedDB = require('./db/connectDB');
app.use(express.json());
app.use(cors());


app.get('/', (req, res) => {
    res.send('backend first API...')
})

const userSchema = require('./schema/user');

connectedDB();

app.post('/createUser', async (req, res) => {
    let User = new userSchema(req.body);
    let result = await User.save();
    console.log('-->', result);
    res.send(result);
})

app.listen(process.env.PORT, () => {
    console.log(`server at ${process.env.PORT}`)
})