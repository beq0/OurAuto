const mongoose = require('mongoose');

const carSchema = mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    mark: {
        type: String,
        required: true
    },
    model: {
        type: String,
        required: true
    },
    imagePath: {
        type: String,
        default: 'C:/Users/AzRy/Desktop/OurAuto/Front/resources/default-car.png'
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
});

module.exports = mongoose.model('Car', carSchema);