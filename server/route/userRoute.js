const express = require('express');
const userRoute = express.Router();
const { register, login, resetPassword, logout, alluser, updateUser } = require('../controller/user')

userRoute.post('/register', register);
userRoute.post('/login', login);
userRoute.patch('/reset', resetPassword);
userRoute.post('/logout', logout);
userRoute.get('/alluser', alluser);
userRoute.patch('/update/:id', updateUser)

module.exports = { userRoute }