const router = require('express').Router();
const User = require('../controllers/user.controller');

router.post('/addUser', User.addUser);

router.post('/editUser', User.editUser);

router.get('/getUsers', User.getUsers);

router.get('/findUser/:username', User.findUser);

router.post('/addFriend', User.addFriend);

module.exports = router;