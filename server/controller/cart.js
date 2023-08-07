const { Cart } = require('../model/cartModel')

module.exports = {

    //Add to cart
    addingToCart: async (req, res) => {
        try {
            const { items, totalQty, totalCost } = req.body;
            const cartItem = new Cart({ user: userId, items, totalQty, totalCost })
            await cartItem.save()
            res.status(200).send({
                status: true,
                msg: "Item added successfully!",
                data: cartItem
            })
        } catch (error) {
            res.status(500).send({
                status: false,
                msg: "Internal server error",
                error: error.message
            })
        }
    },

    // Fetching all data
    fetchCartDetails: async (req, res) => {
        try {
            const data = await Cart.find({ user: userId }).populate('user', 'name')
            res.status(200).send({
                status: true,
                msg: "Here is your all cart data.",
                cartItem: data
            })
        } catch (error) {
            res.status(500).send({
                status: false,
                msg: "Internal server error!",
                error: error.message
            })
        }
    },

    // Updating Item
    updateItem: async (req, res) => {
       
        try {
            const id = req.params.id;
            const { quantity } = req.body;
            const cartItem = await Cart.findOne({ _id: id });
            cartItem.items.quantity = quantity;
            await cartItem.save();
            res.status(200).json({
                status: true,
                msg: `Cart item updated with ID: ${id}`
            });
        }  catch (error) {
            res.status(500).send({
                status: false,
                msg: "Internal server error",
                error: error.message
            });
        }
    },
    

    // deleting Item
    deleteItem: async (req, res) => {
        try {
            const id = req.params.id;
            const result = await Cart.deleteOne({ _id: id });
    
            if (result.deletedCount === 0) {
                return res.status(404).json({
                    status: false,
                    msg: `Cart item with id ${id} not found.`,
                });
            }
    
            const user = req.user; // Assuming the authenticated user is available in the req.user field
            const updatedCartData = await Cart.find({ user: user }).populate('user', 'name').populate('grocery.productID');
    
            res.status(200).json({
                status: true,
                msg: `Item removed from your cart with id: ${id}`,
                data: updatedCartData,
            });
        } catch (error) {
            res.status(500).json({
                status: false,
                msg: "Internal server error",
                error: error.message,
            });
        }
    }
}