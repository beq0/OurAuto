const mongoose = require('mongoose');

const carSchema = mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    brand: {
        type: String,
        required: true
    },
    model: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    sellType: {
        type: String,
        required: true
    },
    imagePath: {
        type: String,
        default: '../../Front/resources/default-car.png'
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
    },
    fuelType: {
        type: String,
        required: true
    },
    customType: {
        type: String,
        required: true
    },
    wheel: {
        type: String,
        required: true
    },
    position: {
        type: String,
        required: true
    },

    // non-required
    cylinders: {
        type: Number
    },
    doors: {
        type: Number
    },
    color: {
        type: String
    },
    interiorColor: {
        type: String
    },
    leatherInterior: {
        type: Boolean
    },
    airbags: {
        type: Number
    },
    ABS: {
        type: Boolean
    },
    electronicWindows: {
        type: Boolean
    },
    conditioner: {
        type: Boolean
    },
    climateControl: {
        type: Boolean
    },
    disks: {
        type: Boolean
    },
    navigation: {
        type: Boolean
    },
    centralLock: {
        type: Boolean
    },
    upperWindow: { // ლუქი
        type: Boolean
    },
    signalization: {
        type: Boolean
    },
    bortComputer: {
        type: Boolean
    },
    hidraulic: {
        type: Boolean
    },
    antiSlide: {
        type: Boolean
    },
    seetHeating: {
        type: Boolean
    },
    parkingControl: {
        type: Boolean
    },
    backViewCamera: {
        type: Boolean
    },
    cruzeControl: {
        type: Boolean
    },
    startStopSystem: {
        type: Boolean
    },
    seatMemory: {
        type: Boolean
    },
    fogHeadlights: {
        type: Boolean
    },
    AUX: {
        type: Boolean
    },
    BlueTooth: {
        type: Boolean
    },
    multiWheel: {
        type: Boolean
    },
    techView: {
        type: Boolean
    }
});

module.exports = mongoose.model('Car', carSchema);