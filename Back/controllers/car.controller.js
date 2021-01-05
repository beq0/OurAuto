const Car = require('../models/Car.model');

module.exports.addCar = (req, res) => {
    const newCar = {
        username: req.body.username,
        mark: req.body.mark,
        model: req.body.model,
        imagePath: getCarImagePath(req.body.imagePath),
        year: req.body.year,
        price: req.body.price,
        mileage: req.body.mileage,
        engine: req.body.engine,
        transmission: req.body.transmission
    }

    newCar.save().then(() => {
        res.status(200).json({message: `Added Car: ${newCar}!`, status: 200, _id: newCar._id});
    }).catch((error) => {
        console.log(error);
        res.status(500).json({message: `Internal Error! Could not add Car: ${newCar}`, status: 500});
    });
}

module.exports.editCar = (req, res) => {
    if (!req.body._id) {
        res.status(500).json({message: 'Id of the Car not provided!'});
        return;
    }
    const mark = req.body.mark;
    const model = req.body.model;
    const imagePath = getCarImagePath(req.body.imagePath);
    const year = req.body.year;
    const price = req.body.price;
    const mileage = req.body.mileage;
    const engine = req.body.engine;
    const transmission = req.body.transmission;
    let updatedCar = {}
    if (mark) updatedCar['mark'] = mark;
    if (model) updatedCar['model'] = model;
    if (imagePath) updatedCar['imagePath'] = imagePath;
    if (year || year === 0) updatedCar['year'] = year;
    if (price || price === 0) updatedCar['price'] = price;
    if (mileage || mileage === 0) updatedCar['mileage'] = mileage;
    if (engine || engine === 0) updatedCar['engine'] = engine;
    if (transmission) updatedCar['transmission'] = transmission;
    Car.findOneAndUpdate(
        { '_id': req.body._id },
        { $set: updatedCar },
        (err) => {
            if (err) {
                console.log(err);
                res.status(500).json({message: err, status: 500});
            } else {
                res.status(200).json({message: `Updated Car ${req.body._id}!`, status: 200, _id: req.body._id});
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

function getCarImagePath(imagePath) {
    if (car.imagePath === null || car.imagePath === undefined) {
        return 'C:/Users/AzRy/Desktop/OurAuto/Front/resources/default-car.png';
    }
    return imagePath;
}

function getCarsWithCorrectImagePaths(cars) {
    return cars.map((car) => {
        if (car.imagePath === null || car.imagePath === undefined) {
            car['imagePath'] = 'C:/Users/AzRy/Desktop/OurAuto/Front/resources/default-car.png';
        }
        return car;
    })
}