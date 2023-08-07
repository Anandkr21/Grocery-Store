const express = require('express');
const groceryRoute = express.Router();
const { grocery, addgrocery, deleteItem, updateItem } = require('../controller/grocery');
const { authentication } = require('../middleware/authentication');
const { authorise } = require('../middleware/authorization');

// Define routes for grocery-related operations 
groceryRoute.get('/allgrocery', grocery); // Route to get all grocery items
groceryRoute.post('/addgrocery', authentication, authorise(['admin', 'seller']), addgrocery); // Route to add a new grocery item, accessible only to 'admin' and 'seller' roles
groceryRoute.patch('/update/:id', authentication, authorise(['admin', 'seller']), updateItem); // Route to update a grocery item, accessible only to 'admin' and 'seller' roles
groceryRoute.delete('/delete/:id', authentication, authorise(['admin', 'seller']), deleteItem); // Route to delete a grocery item, accessible only to 'admin' and 'seller' roles


module.exports = { groceryRoute };


