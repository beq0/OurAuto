const Car = require('../models/Car.model');
const FileUtils = require('../utils/FileUtils');

const ALL_KEYWORD = "ყველა"

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
    let newCarRequired = new Car({
        username: username,
        brand: req.body.brand,
        model: req.body.model,
        category: req.body.category,
        sellType: req.body.sellType,
        imagePath: imagePath,
        year: req.body.year,
        price: req.body.price,
        mileage: req.body.mileage,
        engine: req.body.engine,
        transmission: req.body.transmission,
        fuelType: req.body.fuelType,
        customType: req.body.customType,
        wheel: req.body.wheel,
        position: req.body.position
    });

    const newCar = fillNonRequiredInfo(newCarRequired, req);

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
    // maybe pass whole car object and wholly update it depending on id?
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
    const brand = req.body.brand;
    const model = req.body.model;
    const image = req.body.image;
    let imagePath = getDefaultImagePath();
    let imageInfoToSave = {}
    if (image) {
        imageInfoToSave = FileUtils.getImageInfoToSave(image, username);
        imagePath = imageInfoToSave.fullPath;
    }
    const year = req.body.year;
    const price = req.body.price;
    const mileage = req.body.mileage;
    const engine = req.body.engine;
    const transmission = req.body.transmission;
    let updatedCar = {}
    if (brand) updatedCar['brand'] = brand;
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
    const brand = req.body.brand;
    const model = req.body.model;
    const category = req.body.category;
    const sellType = req.body.sellType;
    const startPrice = req.body.startPrice;
    const endPrice = req.body.endPrice;
    const startYear = req.body.startYear;
    const endYear = req.body.endYear;
    const engine = req.body.engine;
    const transmission = req.body.transmission;
    const fuelType = req.body.fuelType;
    const customType = req.body.customType;
    const wheel = req.body.wheel;
    const position = req.body.position

    let carsForQuery = {}
    if (brand && brand !== ALL_KEYWORD) carsForQuery['brand'] = brand;
    if (model && model !== ALL_KEYWORD) carsForQuery['model'] = model;
    if (category && category !== ALL_KEYWORD) carsForQuery['category'] = category;
    if (sellType && sellType !== ALL_KEYWORD) carsForQuery['sellType'] = sellType;

    if ((startPrice || startPrice === 0) || (endPrice || endPrice === 0)) carsForQuery['price'] = {};
    if (startPrice || startPrice === 0) carsForQuery['price']['$gte'] = startPrice;
    if (endPrice || endPrice === 0) carsForQuery['price']['$lte'] = endPrice;

    if ((startYear || startYear === 0) || (endYear || endYear === 0)) carsForQuery['year'] = {};
    if (startYear || startYear === 0) carsForQuery['year']['$gte'] = startYear;
    if (endYear || endYear === 0) carsForQuery['year']['$lte'] = endYear;

    if (engine || engine === 0) carsForQuery['engine'] = engine;
    if (transmission && transmission !== ALL_KEYWORD) carsForQuery['transmission'] = transmission;

    if (fuelType && fuelType !== ALL_KEYWORD) carsForQuery['fuelType'] = fuelType;
    if (customType && customType !== ALL_KEYWORD) carsForQuery['customType'] = customType;
    if (wheel && wheel !== ALL_KEYWORD) carsForQuery['wheel'] = wheel;
    if (position && position !== ALL_KEYWORD) carsForQuery['position'] = position;

    Car.find(carsForQuery).then((cars) => {
        const carId = req.body._id;
        if (carId) {
            cars = cars.filter(c => c._id != carId);
        }
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

function fillNonRequiredInfo(car, req) {
    const cylinders = req.body.cylinders;
    const doors = req.body.doors;
    const color = req.body.color;
    const interiorColor = req.body.interiorColor;
    const leatherInterior = req.body.leatherInterior;
    const airbags = req.body.airbags;
    const ABS = req.body.ABS;
    const electronicWindows = req.body.electronicWindows;
    const conditioner = req.body.conditioner;
    const climateControl = req.body.climateControl;
    const disks = req.body.disks;
    const navigation = req.body.navigation;
    const centralLock = req.body.centralLock;
    const upperWindow = req.body.upperWindow;
    const signalization = req.body.signalization;
    const bortComputer = req.body.bortComputer;
    const hidraulic = req.body.hidraulic;
    const antiSlide = req.body.antiSlide;
    const seetHeating = req.body.seetHeating;
    const parkingControl = req.body.parkingControl;
    const backViewCamera = req.body.backViewCamera;
    const cruzeControl = req.body.cruzeControl;
    const startStopSystem = req.body.startStopSystem;
    const seatMemory = req.body.seatMemory;
    const fogHeadlights = req.body.fogHeadlights;
    const AUX = req.body.AUX;
    const BlueTooth = req.body.BlueTooth;
    const multiWheel = req.body.multiWheel;
    const techView = req.body.techView;

    if (!isNullOrUndefined(cylinders)) car['cylinders'] = cylinders;
    if (!isNullOrUndefined(doors)) car['doors'] = doors;
    if (!isNullOrUndefined(color)) car['color'] = color;
    if (!isNullOrUndefined(interiorColor)) car['interiorColor'] = interiorColor;
    if (!isNullOrUndefined(leatherInterior)) car['leatherInterior'] = leatherInterior;
    if (!isNullOrUndefined(airbags)) car['airbags'] = airbags;
    if (!isNullOrUndefined(ABS)) car['ABS'] = ABS;
    if (!isNullOrUndefined(electronicWindows)) car['electronicWindows'] = electronicWindows;
    if (!isNullOrUndefined(conditioner)) car['conditioner'] = conditioner;
    if (!isNullOrUndefined(climateControl)) car['climateControl'] = climateControl;
    if (!isNullOrUndefined(disks)) car['disks'] = disks;
    if (!isNullOrUndefined(navigation)) car['navigation'] = navigation;
    if (!isNullOrUndefined(centralLock)) car['centralLock'] = centralLock;
    if (!isNullOrUndefined(upperWindow)) car['upperWindow'] = upperWindow;
    if (!isNullOrUndefined(signalization)) car['signalization'] = signalization;
    if (!isNullOrUndefined(bortComputer)) car['bortComputer'] = bortComputer;
    if (!isNullOrUndefined(hidraulic)) car['hidraulic'] = hidraulic;
    if (!isNullOrUndefined(antiSlide)) car['antiSlide'] = antiSlide;
    if (!isNullOrUndefined(seetHeating)) car['seetHeating'] = seetHeating;
    if (!isNullOrUndefined(parkingControl)) car['parkingControl'] = parkingControl;
    if (!isNullOrUndefined(backViewCamera)) car['backViewCamera'] = backViewCamera;
    if (!isNullOrUndefined(cruzeControl)) car['cruzeControl'] = cruzeControl;
    if (!isNullOrUndefined(startStopSystem)) car['startStopSystem'] = startStopSystem;
    if (!isNullOrUndefined(seatMemory)) car['seatMemory'] = seatMemory;
    if (!isNullOrUndefined(fogHeadlights)) car['fogHeadlights'] = fogHeadlights;
    if (!isNullOrUndefined(AUX)) car['AUX'] = AUX;
    if (!isNullOrUndefined(BlueTooth)) car['BlueTooth'] = BlueTooth;
    if (!isNullOrUndefined(multiWheel)) car['multiWheel'] = multiWheel;
    if (!isNullOrUndefined(techView)) car['techView'] = techView;

    return car;
}

function isNullOrUndefined(obj) {
    return obj === null || obj === undefined;
}

function getDefaultImagePath() {
    return '/our_auto/Back/public/car-images/default-car.png';
}