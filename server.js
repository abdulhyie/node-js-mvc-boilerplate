require('dotenv').config();
const express = require('express');
const cors = require('cors')
const router = require('./routes');

// creating an instance of the app
const app = express();

// import helpers
const helpers = require('./_helpers');

// get node environment
const ENV = process.env.NODE_ENV

// setup cors
app.use(cors());

// configure request logger
app.use(async (req, res, next) => {
    console.log(req.url, " received with following details");
    console.log("method: ", req.method);
    console.log("host: ", req.hostname);
    const TIME = await helpers.currentTimestamp.call();
    console.log("timestamp: " + TIME);
    next()
});

// configuring json parser
app.use(express.json());

// configure router
app.use('/', router);

// start server
app.listen(process.env.PORT || 3000, () => {
    console.log(`Server is running on http://${process.env.HOST}:${process.env.PORT} in ${process.env.NODE_ENV} enviroment.`)
});