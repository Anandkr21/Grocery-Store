const express = require('express');
const userRoute = express.Router();
const { register, login, resetPassword, logout, alluser } = require('../controller/user');

// Define routes for user-related operations
userRoute.post('/register', register); // Route for user registration
userRoute.post('/login', login); // Route for user login
userRoute.patch('/reset', resetPassword); // Route for resetting user password
userRoute.post('/logout', logout); // Route for user logout
userRoute.get('/alluser', alluser); // Route to get all users

module.exports = { userRoute };
