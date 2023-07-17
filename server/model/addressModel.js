const mongoose = require('mongoose');

const addresSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users"
    },
    street: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true,
    },
    postalCode: {
        type: Number,
        required: true,
    },
    mobileNumber: {
        type: Number,
        required: true,
    },
    country: {
        type: String,
        required: true,
    },

}, {
    versionKey: false
});

const Address = mongoose.model('address', addresSchema);

module.exports = { Address }