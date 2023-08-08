const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users',
    },
    cartItem: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "cart",
    },
    address: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'address'
    },
    status: {
        type: String,
        enum: ['Sending', 'Shipped', 'Delivered'],
        default: 'Pending'
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
}, {
    versionKey: false
});

orderSchema.index({ total: 1 });  // It will order the item in ascending order

const Order = new mongoose.model('order', orderSchema);

module.exports = { Order };
