const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: {
        type: String,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    avatar: {
        type: String
    },
    role: {
        type: String,
        enum: ['Customer', 'Seller', 'Admin'],
        default: 'Customer'
    },
    address: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "address"
    },
    createdTime: {
        type: Date,
        default: Date.now
    },
}, {
    versionKey: false
});

userSchema.index({ name: 1 })

const UserModel = new mongoose.model('users', userSchema);

module.exports = { UserModel };


// {
//   "name":"anand",
//   "email": "anand@gmail.com",
//   "password": "aA@12345",
//   "role": "admin"
// }

// password shoud be mixture of
// lower, upper, number and special character.
// length shoud be atleast 8 character