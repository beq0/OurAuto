const express = require('express');
const app = express();
const morgan = require('morgan');
const cors = require('cors');
const dotenv = require('dotenv');
const { Sequelize } = require('sequelize');

dotenv.config()
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

console.log(process.env.OUR_AOUTO_DB_USERNAME + ':' + process.env.OUR_AOUTO_DB_PASSWORD);
const sequelize = new Sequelize('postgres://' + process.env.OUR_AOUTO_DB_USERNAME + ':' + process.env.OUR_AOUTO_DB_PASSWORD + '@localhost:4199/ourauto');

async function testConnection() {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

testConnection();

// Routes to handle requests
// app.use('/', require('./api/routes/));


app.use((req, res, next) => {
    res.status(404).json({
        error: new Error('Not Found')
    });
});

module.exports = app;