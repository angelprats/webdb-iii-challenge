const express = require('express');
const helmet = require('helmet');

const schoolRouter = require('../school/school-router.js')

const server = express();

server.use(helmet());
server.use(express.json());

server.use('/api/schools', schoolRouter);


module.exports = server;