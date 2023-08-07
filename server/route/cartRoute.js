const express = require('express');
const cartRoute = express.Router()
const { addingToCart } = require('../controller/cart')

cartRoute.post('/addToCart', addingToCart);

module.exports = { cartRoute }