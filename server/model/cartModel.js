const mongoose = require('mongoose');

const cartSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users'
    },
    items: [{
        productId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'grocery'
        },
        quantity: {
            type: Number,
        },
        price: {
            type: Number
        }
    }],
    totalQty: {
        type: Number,
        default: 0,
    },
    totalCost: {
        type: Number,
        default: 0,
    },
    purchaseDate: {
        type: Date,
        default: Date.now
    }
}, {
    versionKey: false
});

const Cart = mongoose.model('cart', cartSchema);

module.exports = { Cart }


// "item": "hello",
// "totalQty": "5",
// "totalCost": "500"