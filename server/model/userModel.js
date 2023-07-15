const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        validate: {
            validator: function (password) {
                // Password validation logic
                const passwordRegex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])/;
                return passwordRegex.test(password);
            },
            message: 'Please enter a strong password (at least 6 characters with a mixture of uppercase and lowercase letters, numbers, and special characters).',
        },
    },
    role: {
        type: String,
        enum: ['user', 'admin'],
        default: 'user'
    },
    createdTime: {
        type: Date,
        default: Date.now
    },
}, {
    versionKey: false
});

const UserModel = new mongoose.model('User', userSchema);

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