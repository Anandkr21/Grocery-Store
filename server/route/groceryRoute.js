const express = require('express');
const groceryRoute = express.Router();
const { grocery, addgrocery, deleteItem, updateItem } = require('../controller/grocery');

groceryRoute.get('/allgrocery', grocery);
groceryRoute.post('/addgrocery', addgrocery);
groceryRoute.patch('/update/:id', updateItem);
groceryRoute.delete('/delete/:id', deleteItem);

module.exports = { groceryRoute }