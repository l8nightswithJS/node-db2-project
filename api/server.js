const express = require('express');
const helmet = require('helmet');


const server = express();

const carsRouters = require('../cars/cars-routers.js')

server.use(helmet());
server.use(express.json());

server.use('/api/cars', carsRouters);

module.exports = server;