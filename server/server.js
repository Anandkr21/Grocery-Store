const express = require('express');
const fs = require('fs');
const { routeLogger } = require('./middleware/loggerMiddleware');
const { connection } = require('./config/db');
const { userRoute } = require('./route/userRoute');
const { groceryRoute } = require('./route/groceryRoute');
const { cartRoute } = require('./route/cartRoute');

// Load environment variables from the .env file
require('dotenv').config();

// Create an Express application
const app = express();

// Parse incoming JSON data
app.use(express.json());

// Set the port for the server to listen on, default to 8080 if not specified in the .env file
const Port = process.env.PORT || 8080;

// Route for the root URL
app.get('/', (req, res) => {
    res.status(200).send({
        status:true,
        msg: 'Welcome to Grocery Store !'
    });
});

// Route Logger Middleware
app.use(routeLogger);

// Use the defined routes for different parts of the application
app.use('/user', userRoute); // User-related routes
app.use('/grocery', groceryRoute); // Grocery-related routes
app.use('/cart', cartRoute); // Cart-related routes

// Start the server and listen for incoming connections
app.listen(Port, async () => {
    try {
        // Connect to the database using the connection object
        await connection;
        console.log('Connected to Database');
    } catch (error) {
        console.log('Unable to connect with Database');
    }
    console.log(`Server is running at http://localhost:${Port}`);
});

