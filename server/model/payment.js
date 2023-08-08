const mongoose = require('mongoose');

const paymentSchema = mongoose.Schema({
    order: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'order'
    },
    totalAmount: {
        type: Number,
        required: true
    },
    paymentDate: {
        type: Date,
        default: Date.now
    },
    status: {
        type: String,
        enum: ['Pending', 'Completed', 'Cancelled'],
        default: 'Pending'
    },
    cardHolderName: {
        type: String,
    },
    cardNumber: {
        type: String,
    },
    expDate: {
        type: String,
    },
    cvv: {
        type: String,
    }
})

const Payment = new mongoose.model('payment', paymentSchema);

module.exports = { Payment }