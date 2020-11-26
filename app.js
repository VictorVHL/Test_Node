const express = require('express');
const app = express();
const userRoute = require('./user/user.route')
const mongoose = require('mongoose');
const bodyparser = require('body-parser')

mongoose.connect(
    'mongodb://localhost:27017/testDataBase',
    { useNewUrlParser: true },
    () => {
        console.log('connect to database...')
    }
)

app.use(bodyparser.urlencoded({extended : false}));
app.use(bodyparser.json());

app.use(userRoute);

module.exports = app;