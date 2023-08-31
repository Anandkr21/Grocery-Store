const { app } = require('./app');
const { connection } = require('./config/db');

// Load environment variables from the .env file
require('dotenv').config();

// Set the port for the server to listen on, default to 8080 if not specified in the .env file
const Port = process.env.PORT || 8080;

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


