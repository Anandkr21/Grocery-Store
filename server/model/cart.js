const mongoose = require('mongoose');

const cartSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users'
    },
    item: {
        productId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'grocery'
        },
        quantity: Number
    }
}, {
    versionKey: false
});

const Cart = mongoose.model('cart', cartSchema);

module.exports = { Cart }