const mongoose = require('mongoose');

const addresSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users"
    },
    street: {
        type: String,
    },
    city: {
        type: String,
    },
    postalCode: {
        type: Number,
    },
    mobileNumber: {
        type: Number,
    },
    country: {
        type: String,
    },

}, {
    versionKey: false
});

const Address = new mongoose.model('address', addresSchema);

module.exports = { Address }