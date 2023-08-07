const express = require('express');
const groceryRoute = express.Router();
const { grocery, addgrocery, deleteItem, updateItem } = require('../controller/grocery');
const { authentication } = require('../middleware/authentication');
const { authorise } = require('../middleware/authorization');

groceryRoute.get('/allgrocery', authentication, grocery);
groceryRoute.post('/addgrocery', authentication, authorise(['admin', 'seller']), addgrocery);
groceryRoute.patch('/update/:id', authentication, authentication, authorise(['admin', 'seller']), updateItem);
groceryRoute.delete('/delete/:id', authentication, authentication, authorise(['admin', 'seller']), deleteItem);

module.exports = { groceryRoute }