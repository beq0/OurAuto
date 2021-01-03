const router = require('express').Router();
const Car = require('../controllers/car.controller');

router.post('/addCar', Car.addCar);

router.post('/editCar', Car.editCar);

router.delete('/deleteCar/:_id', Car.deleteCar);

router.get('/getCars', Car.getCars);

router.post('/filterCars', Car.filterCars);

router.get('/findCar/:_id', Car.findCar);

router.get('/getCarsForUser/:username', Car.getCarsForUser);

module.exports = router;