const User = require('../models/User.model');

module.exports.addUser = (req, res) => {
    const user = new User({
        name: req.body.name,
        username: req.body.username,
        password: req.body.password,
        mobile: req.body.mobile
    });
    user.save().then(() => {
        res.status(200).json({message: `Added User: ${user}!`, status: 200, _id: user._id});
    }).catch((error) => {
        console.log(error);
        res.status(500).json({message: `Internal Error! Could not add User: ${user}`, status: 500});
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
    if (req.body.mobile) updatedUser['mobile'] = req.body.mobile;
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
    if (!req.params.username) {
        res.status(500).json({message: 'username must be specified to find the user'});
        return;
    }
    let userToFind = {
        username: req.params.username
    }
    User.findOne(userToFind).then((user) => {
        if (user) res.status(200).json(user);
        else res.status(500).json({message: `Could not find User: ${userToFind}`});
    }).catch((err) => {
        res.status(500).json({message: `Error during finding User: ${userToFind}`});
    })
}

module.exports.authenticate = (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    if (!username) {
        res.status(500).json({message: 'username must be specified to authenticate the user'});
        return;
    }
    if (!password) {
        res.status(500).json({message: 'password must be specified to authenticate the user'});
        return;
    }
    let userToAuthenticate = {
        username,
        password
    }
    User.findOne(userToAuthenticate).then((user) => {
        if (user) {
            delete user.password;
            res.status(200).json({message: `User ${username} authenticated successfully!`, user: user});
        }
        else res.status(500).json({message: `Authentication failed for User: ${userToAuthenticate}`});
    }).catch((err) => {
        res.status(500).json({message: `Error during authenticating User: ${userToAuthenticate}`});
    })
}

module.exports.addFriend = (req, res) => {
    if (!req.body._id) {
        res.status(500).json({message: 'Id of the User not provided to add friend!'});
        return;
    }
    let friend = {
        name: req.body.name,
        username: req.body.username
    }
    User.findOneAndUpdate(
        { '_id': req.body._id },
        { $push: { friends: friend } },
        (err) => {
            if (err) {
                console.log(err);
                res.status(500).json({message: err, status: 500});
            } else {
                res.status(200).json({message: `Added friend ${friend} to user ${req.body._id}!`, status: 200, _id: req.body._id});
            }
        }
    )
}