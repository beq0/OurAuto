const User = require('../models/User.model');

module.exports.addUser = (req, res) => {
    const user = new User({
        name: req.body.name,
        username: req.body.username,
        password: req.body.password
    });
    user.save().then(() => {
        res.status(200).json({message: `Added ${user} User!`, status: 200, _id: user._id});
    }).catch((error) => {
        console.log(error);
        res.status(500).json({message: `Internal Error! Could not add ${user} User`, status: 500});
    });
}

module.exports.editUser = (req, res) => {
    if (!req.body._id) {
        res.status(500).json({message: 'Id of the User not provided!'});
        return;
    }
    let updatedUser = {}
    if (req.body.name) updatedUser['name'] = req.body.name;
    if (req.body.username) updatedUser['username'] = req.body.username;
    if (req.body.password) updatedUser['password'] = req.body.password;
    User.findOneAndUpdate(
        { '_id': req.body._id },
        { $set: updatedUser },
        (err) => {
            if (err) {
                console.log(err);
                res.status(500).json({message: err, status: 500});
            } else {
                res.status(200).json({message: `Updated User ${req.body._id}!`, status: 200, _id: req.body._id});
            }
        }
    )
}

module.exports.getUsers = (req, res) => {
    User.find().then((users) => {
        res.status(200).json(users);
    }).catch((err) => {
        res.status(500).json({message: err});
    })
}

module.exports.findUser = (req, res) => {
    if (!req.body.username) {
        res.status(500).json({message: 'username must be specified to find the user'});
        return;
    }
    let userToFind = {
        username: req.body.username
    }
    User.findOne(userToFind).then((user) => {
        if (user) res.status(200).json(user);
        else res.status(500).json({message: `Could not find User: ${userToFind}`});
    }).catch((err) => {
        res.status(500).json({message: `Error during finding User: ${userToFind}`});
    })
}

module.exports.addCar = (req, res) => {
    const userId = req.body.userId;
    if (!userId) {
        res.status(500).json({message: 'User id must be specified to add the car'});
        return;
    }

    const newCar = {
        mark: req.body.mark,
        model: req.body.model,
        year: req.body.year,
        price: req.body.price,
        mileage: req.body.mileage,
        engine: req.body.engine
    }

    User.findOneAndUpdate(
        { _id: req.body.userId }, 
        { $push: { cars: newCar } },
        (err) => {
            if (err) {
                console.log(err);
                res.status(500).json({message: err, status: 500});
            } else {
                res.status(200).json({message: `Added car to User ${userId}!`, status: 200});
            }
        }
    );

    // if (!req.body.userId) {
    //     res.status(500).json({message: 'User id must be specified to add the car'});
    //     return;
    // }
    // User.findOne({_id: req.body.userId}).then((oldUser) => {
    //     if (oldUser) {
    //         let newCars = oldUser.cars;
    //         const newCar = {
    //             mark: req.body.mark,
    //             model: req.body.model,
    //             year: req.body.year,
    //             price: req.body.price,
    //             mileage: req.body.mileage,
    //             engine: req.body.engine
    //         }
    //         newCars.push(newCar)
    //         let updatedUser = {
    //             cars: newCars
    //         }
    //         User.findOneAndUpdate(
    //             { '_id': oldUser._id },
    //             { $set: updatedUser },
    //             (err) => {
    //                 if (err) {
    //                     console.log(err);
    //                     res.status(500).json({message: err, status: 500});
    //                 } else {
    //                     res.status(200).json({message: `Added car to User ${oldUser._id}!`, status: 200, _id: oldUser._id});
    //                 }
    //             }
    //         )
    //     }
    //     else res.status(500).json({message: `Could not find User, to add the car, with id: ${req.body.userId}`});
    // }).catch((err) => {
    //     res.status(500).json({message: `Error during finding User, to add the car, with id: ${req.body.userId}`});
    // })
}

module.exports.editCar = (req, res) => {
    
}

module.exports.deleteCar = (req, res) => {

}

module.exports.getCars = (req, res) => {
    User.find().then((users) => {
        let cars = [];
        users.forEach(user => user.cars.forEach(car => cars.push(car)));
        res.status(200).json(cars);
    }).catch((err) => {
        res.status(500).json({message: err});
    })
}

module.exports.filterCars = (req, res) => {
    User.find().then((users) => {
        let cars = [];
        users.forEach(user => user.cars.forEach(car => cars.push(car)));
        cars.filter(car => {
            const mark = req.body.mark;
            const model = req.body.model;
            const startPrice = req.body.startPrice;
            const endPrice = req.body.endPrice;
            const startYear = req.body.startYear;
            const endYear = req.body.endYear;
            const engine = req.body.engine;
            const transmission = req.body.transmission;
            if ((mark && car.mark !== mark) ||
                (model && car.model !== model) ||
                (startPrice && car.price < startPrice) ||
                (endPrice && car.price > endPrice) ||
                (startYear && car.year < startYear) ||
                (endYear && car.year > endYear) ||
                ((engine || engine === 0) && (car.engine !== engine)) ||
                (transmission && car.transmission !== transmission) ||
                (mark && car.mark !== mark)) 
                return false;
            return true; 
        })
        
        res.status(200).json(cars);
    }).catch((err) => {
        res.status(500).json({message: err});
    })
}

module.exports.findCar = (req, res) => {

}