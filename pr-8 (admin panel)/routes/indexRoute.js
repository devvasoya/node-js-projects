const express = require('express');

const routes = express.Router();


routes.use('/', require('../routes/authRoutes'))
routes.use('/catagory',require('../routes/CatagoryRoutes'))

module.exports = routes