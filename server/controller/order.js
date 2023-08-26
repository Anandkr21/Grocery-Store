// const { Cart } = require('../model/cartModel');
// const { Order } = require('../model/orderModel');

// module.exports = {

    // GET /orders
    // getOrder: async (req, res) => {
    //     try {
    //         const orders = await Order.find().populate('user cart address');
    //         res.status(200).json({
    //             status: 'success',
    //             data: orders
    //         });
    //     } catch (err) {
    //         res.status(500).json({
    //             status: 'error',
    //             message: 'Failed to fetch orders',
    //             error: err.message
    //         });
    //     }
    // },


    // POST /orders
    // postOrder: async (req, res) => {
    //     try {
    //         const { products, totalAmount } = req.body;
    //         const order = new Order({ user: user, products, totalAmount });
    //         await order.save();
    //         res.status(200).json({
    //             status: true,
    //             msg: 'Ordered Successfully !'
    //         })
    //     } catch {
    //         res.status(500).json({
    //             status: false,
    //             msg: 'Internal Server Error Occurred In Orders.'
    //         })
    //     }
    // },
// }



