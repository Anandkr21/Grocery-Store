const express = require('express');
const groceryRoute = express.Router();
const { grocery, addgrocery, deleteItem, updateItem } = require('../controller/grocery');
const { authentication } = require('../middleware/authentication');
const { authorise } = require('../middleware/authorization');

// Define routes for grocery-related operations 
groceryRoute.get('/allgrocery', grocery); // Route to get all grocery items
groceryRoute.post('/addgrocery', authentication, authorise(['Admin', 'Seller']), addgrocery); // Route to add a new grocery item, accessible only to 'admin' and 'seller' roles
groceryRoute.patch('/update/:id', authentication, authorise(['Admin', 'Seller']), updateItem); // Route to update a grocery item, accessible only to 'admin' and 'seller' roles
groceryRoute.delete('/delete/:id', authentication, authorise(['Admin', 'Seller']), deleteItem); // Route to delete a grocery item, accessible only to 'admin' and 'seller' roles


module.exports = { groceryRoute };


