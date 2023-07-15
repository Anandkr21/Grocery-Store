const express = require('express');
const { connection } = require('./config/db');
const { router } = require('./route/userRoute');

require('dotenv').config();
const app = express()
app.use(express.json())

const Port = process.env.PORT || 5000;


app.get('/', (req, res) => {
    res.status(200).send({
        msg: 'Welcome to Grocery Store'
    });
});


app.use('/user', router)


app.listen(Port, async () => {
    try {
        await connection
        console.log('Connected to Database');
    } catch (error) {
        console.log('Unable to connect with Database');
    }
    console.log(`Server is running at http://localhost:${Port}`);
})

