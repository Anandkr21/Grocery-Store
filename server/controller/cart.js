const { Cart } = require('../model/cartModel')

module.exports = {

    //Add to cart
    addingToCart: async (req, res) => {
        try {
            const productId = req.params.id;
            const { quantity, price } = req.body;
            const cartItem = new Cart({ user: userId, productId, quantity, price })
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
            const data = await Cart.find({ user: userId }).populate('user', 'name').populate('productId')
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
            cartItem.quantity = quantity;
            await cartItem.save();
            res.status(200).json({
                status: true,
                msg: `Cart item updated with ID: ${id}`
            });
        } catch (error) {
            res.status(500).send({
                status: false,
                msg: "Internal server error",
                error: error.message
            });
        }
    },


    // delete Item
    deleteItem: async (req, res) => {
        try {
            const id = req.params.id;
            const result = await Cart.findByIdAndDelete({ _id: id });

            if (!result) {
                return res.status(404).json({
                    status: false,
                    msg: `Cart item with id ${id} not found.`,
                });
            } else {
                res.status(200).json({
                    status: true,
                    msg: `Item removed from your cart with id: ${id}`
                });
            }
        } catch (error) {
            res.status(500).json({
                status: false,
                msg: "Internal server error",
                error: error.message,
            });
        }
    }
}

