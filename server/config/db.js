require('dotenv').config();

// Import the mongoose library
const mongoose = require('mongoose');

// Connect to the MongoDB database using the provided mongoURL from the environment variables
const connection = mongoose.connect(process.env.mongoURL);

module.exports = { connection };
