const express = require('express');
const cartRoute = express.Router()
const {addItemToCart } = require('../controller/cart')

cartRoute.get('/add', addItemToCart );

module.exports = {cartRoute}