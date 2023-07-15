const express = require('express');
const router = express.Router();
const {register,login,resetPassword,logout} = require('../controller/user')
require('dotenv').config();

router.post('/register', register)
router.post('/login', login)
router.patch('/reset', resetPassword)
router.post('/logout', logout)

module.exports = {router}