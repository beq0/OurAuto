const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    mobile: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    friends: {
        type: 
        [
            {
                name: {
                    type: String,
                    required: true
                },
                username: {
                    type: Number,
                    required: true
                }
            }
        ]
    }
});

module.exports = mongoose.model('User', userSchema);