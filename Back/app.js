const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const bodyParser = require("body-parser");
const cors = require('cors');
const userRoute = require('./routes/user.route');
const carRoute = require('./routes/car.route');
const path = require("path");
const Car = require('./models/Car.model')

mongoose.connect('mongodb://localhost/our_auto', {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true
}, (error) => {
    if(!error) console.log('Connected to DB!');
    else console.log(error);
});

const app = express();

dotenv.config()
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(express.static(path.join(__dirname, "public")));


app.use('/api/user', userRoute);
app.use('/api/car', carRoute);

app.use('/api/*', (req, res, next) => {
    res.status(404).json({ message: 'Not Found' });
});


mongoose.set('useFindAndModify', false);

module.exports = app;


// const user = new User({
//     name: 'Test User',
// 	username: 'Test Test',
// 	password: 'dsaj',
// });

// user.save().then(res => {
//     console.log(res);
// }).catch(err => {
//     console.log(err)
// });

// const car = new Car({
//     username: 'beq0',
//     mark: 'Mercedes',
//     model: 'E Class 2015',
//     year: 2015,
//     price: 190000,
//     mileage: 15500,
//     engine: 5.5,
//     transmission: 'automatic'
// });

// car.save().then(res => {
//     console.log(res);
// }).catch(err => {
//     console.log(err)
// });
