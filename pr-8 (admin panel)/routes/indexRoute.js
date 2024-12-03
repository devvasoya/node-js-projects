const express = require('express');

const routes = express.Router();


routes.use('/',require('../routes/authRoutes'))

module.exports = routes