const router = require('express').Router();
const User = require('../controllers/user.controller');

router.post('/addUser', User.addUser);

router.post('/editUser', User.editUser);

router.get('/getUsers', User.getUsers);

router.get('/findUser', User.findUser);

router.delete('/addCar', User.addCar);

router.delete('/editCar', User.editCar);

router.post('/deleteCar', User.deleteCar);

router.get('/getCars', User.getCars);

router.get('/filterCars', User.filterCars);

router.get('/findCar', User.findCar);

module.exports = router;