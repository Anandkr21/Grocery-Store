const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users',
    },
    items: [
        {
            productId: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "grocery",
            },
            qty: {
                type: Number,
                default: 0,
            },
            price: {
                type: Number,
                default: 0,
            },
        },
    ],
    total: {
        type: Number,
    },
    address: {
        type: String,
    },
    paymentId: {
    },
    status: {
        type: String,
        enum: ['pending', 'shipped', 'delivered'],
        default: 'pending'
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
}, {
    versionKey: false
});

orderSchema.index({ total: 1 });  // It will order the item in ascending order

const Order = mongoose.model('Order', orderSchema);

module.exports = { Order };
