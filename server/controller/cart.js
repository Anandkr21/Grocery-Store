const { Cart } = require('../model/cartModel')

exports.addingToCart = async (req, res) => {
    try {
        const {products} = req.body;
        const cartItem = new Cart({user: user, products})
        await cartItem.save()
        res.status(200).send({
            status:true,
            msg: "Item added successfully!",
            data: cartItem
        })
    } catch (error) {
        res.status(500).send({
            status:false,
            msg: "Internal server error",
            error:error.message
        })
    }
}