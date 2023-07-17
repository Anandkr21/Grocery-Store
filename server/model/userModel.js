const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: {
        type: String,
        // required: true
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
    role: {
        type: String,
        enum: ['user', 'admin'],
        default: 'user'
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