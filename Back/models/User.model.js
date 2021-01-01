const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    cars: {
        type: 
        [
            {
                mark: {
                    type: String,
                    required: true
                },
                model: {
                    type: String,
                    required: true
                },
                year: {
                    type: Number,
                    required: true
                },
                price: {
                    type: Number,
                    required: true
                },
                mileage: {
                    type: Number,
                    required: true
                },
                engine: {
                    type: Number,
                    required: true
                },
                transmission: {
                    type: String,
                    required: true
                }
            }
        ],
        required: true
    },
    friends: {
        type: 
        [
            {
                id: {
                    type: String,
                    required: true
                },
                name: {
                    type: String,
                    required: true
                },
                username: {
                    type: Number,
                    required: true
                }
            }
        ],
        required: true
    }
});

module.exports = mongoose.model('User', userSchema);