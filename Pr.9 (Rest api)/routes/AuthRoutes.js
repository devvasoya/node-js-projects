const express = require('express');
const { loginUser } = require('../controller/authController');

const routes = express.Router();

routes.post('/login',loginUser)

module.exports = routes