const Car = require('../models/Car.model');
const FileUtils = require('../utils/FileUtils');

module.exports.addCar = (req, res) => {
    const username = req.body.username;
    if (!username) {
        res.status(500).json({message: 'Car user\'s username must be provided to add the car'});
        return;
    }
    const image = req.body.image;
    let imagePath = getDefaultImagePath();
    let imageInfoToSave = {}
    if (image) {
        imageInfoToSave = FileUtils.getImageInfoToSave(image, username);
        imagePath = imageInfoToSave.fullPath;
    }
    const newCar = new Car({
        username: username,
        mark: req.body.mark,
        model: req.body.model,
        imagePath: imagePath,
        year: req.body.year,
        price: req.body.price,
        mileage: req.body.mileage,
        engine: req.body.engine,
        transmission: req.body.transmission
    });

    newCar.save().then(() => {
        if (image) {
            FileUtils.saveImage(imageInfoToSave.base64Data, imagePath)
        }
        res.status(200).json({message: `Added Car: ${newCar}!`, status: 200, _id: newCar._id});
    }).catch((error) => {
        console.log(error);
        res.status(500).json({message: `Internal Error! Could not add Car: ${newCar}`, status: 500});
    });
}

module.exports.editCar = async (req, res) => {
    const carId = req.body._id;
    if (!carId) {
        res.status(500).json({message: 'Id of the Car not provided to edit it!'});
        return;
    }
    if (!req.body.username) {
        res.status(500).json({message: 'Username of the Car not provided to edit it!'});
        return;
    }
    let oldCar = {}
    let oldCarPromise = new Promise((res, rej) => {
        Car.findOne({_id: carId}).then((car) => {
            if (car) oldCar = car;
            else res.status(500).json({message: `Could not find old Car for id: ${carId}`});
        }).catch((err) => {
            res.status(500).json({message: `Error during finding old Car for id: ${carId}`});
        })
    })
    await oldCarPromise;
    const mark = req.body.mark;
    const model = req.body.model;
    const image = req.body.image;
    let imagePath = getDefaultImagePath();
    let imageInfoToSave = {}
    if (image) {
        imageInfoToSave = FileUtils.getImageInfoToSave(image, username);
        console.log(imageInfoToSave);
        imagePath = imageInfoToSave.fullPath;
    }
    const year = req.body.year;
    const price = req.body.price;
    const mileage = req.body.mileage;
    const engine = req.body.engine;
    const transmission = req.body.transmission;
    let updatedCar = {}
    if (mark) updatedCar['mark'] = mark;
    if (model) updatedCar['model'] = model;
    if (image) updatedCar['imagePath'] = imagePath;
    if (year || year === 0) updatedCar['year'] = year;
    if (price || price === 0) updatedCar['price'] = price;
    if (mileage || mileage === 0) updatedCar['mileage'] = mileage;
    if (engine || engine === 0) updatedCar['engine'] = engine;
    if (transmission) updatedCar['transmission'] = transmission;
    Car.findOneAndUpdate(
        { '_id': carId },
        { $set: updatedCar },
        (err) => {
            if (err) {
                console.log(err);
                res.status(500).json({message: err, status: 500});
            } else {
                if (image) {
                    FileUtils.saveImage(imageInfoToSave.base64Data, imagePath);
                    FileUtils.removeFile(oldCar.imagePath);
                }
                res.status(200).json({message: `Updated Car ${carId}!`, status: 200, _id: carId});
            }
        }
    )
}

module.exports.deleteCar = (req, res) => {
    Car.findOneAndDelete(
        { '_id': req.params._id },
        (err, doc) => {
            if (err) {
                res.status(500).json({message: err, status: 500});
            } else {
                res.status(200).json({message: `Deleted Car ${req.body._id}!`, status: 200});
            }
        }
    )
}

module.exports.getCars = (req, res) => {
    Car.find().then((cars) => {
        res.status(200).json(cars);
    }).catch((err) => {
        res.status(500).json({message: err});
    })
}

module.exports.filterCars = (req, res) => {
    const mark = req.body.mark;
    const model = req.body.model;
    const startPrice = req.body.startPrice;
    const endPrice = req.body.endPrice;
    const startYear = req.body.startYear;
    const endYear = req.body.endYear;
    const engine = req.body.engine;
    const transmission = req.body.transmission;

    let carsForQuery = {}
    if (mark) carsForQuery['mark'] = mark;
    if (model) carsForQuery['model'] = model;

    if ((startPrice || startPrice === 0) || (endPrice || endPrice === 0)) carsForQuery['price'] = {};
    if (startPrice || startPrice === 0) carsForQuery['price']['$gte'] = startPrice;
    if (endPrice || endPrice === 0) carsForQuery['price']['$lte'] = endPrice;

    if ((startYear || startYear === 0) || (endYear || endYear === 0)) carsForQuery['year'] = {};
    if (startYear || startYear === 0) carsForQuery['year']['$gte'] = startYear;
    if (endYear || endYear === 0) carsForQuery['year']['$lte'] = endYear;

    if (engine || engine === 0) carsForQuery['engine'] = engine;
    if (transmission && transmission !== 'ყველა') carsForQuery['transmission'] = transmission;

    Car.find(carsForQuery).then((cars) => {
        res.status(200).json(cars);
    }).catch((err) => {
        res.status(500).json({message: err});
    })
}

module.exports.findCar = (req, res) => {
    if (!req.params._id) {
        res.status(500).json({message: 'Car identification must be specified to find the car'});
        return;
    }
    let carToFind = {
        _id: req.params._id
    }
    Car.findOne(carToFind).then((car) => {
        if (car) res.status(200).json(car);
        else res.status(500).json({message: `Could not find Car: ${carToFind}`});
    }).catch((err) => {
        res.status(500).json({message: `Error during finding Car: ${carToFind}`});
    })
}

module.exports.getCarsForUser = (req, res) => {
    const username = req.params.username;
    if (!username) {
        res.status(500).json({message: 'To get the cars for the user, the username must be specified!'});
        return;
    }
    let carToFind = {
        username: username
    }
    Car.find(carToFind).then((cars) => {
        if (cars) res.status(200).json(cars);
        else res.status(500).json({message: `Could not find Cars for user ${username}`});
    }).catch((err) => {
        res.status(500).json({message: `Error during finding Cars for user ${username}`});
    })
}

function getDefaultImagePath() {
    return 'C:/Users/AzRy/Desktop/OurAuto/Front/resources/default-car.png';
}