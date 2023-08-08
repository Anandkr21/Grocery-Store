const express = require('express');
const cartRoute = express.Router();
const { addingToCart, fetchCartDetails, updateItem, deleteItem } = require('../controller/cart');
const { authentication } = require('../middleware/authentication');

// Define routes for cart-related operations 
cartRoute.get('/cartitem', authentication, fetchCartDetails); // Route to get all cart details for the authenticated user
cartRoute.post('/addtocart/:id', authentication, addingToCart); // Route to add an item to the cart, accessible only to authenticated users
cartRoute.patch('/update/:id', authentication, updateItem); // Route to update a cart item, accessible only to authenticated users
cartRoute.delete('/delete/:id', authentication, deleteItem); // Route to delete a cart item, accessible only to authenticated users

module.exports = { cartRoute };

