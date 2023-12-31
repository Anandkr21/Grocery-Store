const express = require('express');
const { getOrder, postOrder } = require('../controller/order')
const orderRoute = express.Router();

orderRoute.get('/get', getOrder);
orderRoute.post('/postorder', postOrder);

module.exports = { orderRoute }