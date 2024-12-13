const express = require('express')

const routes = express.Router();

const {producatpage,exsubcategryajex} = require('../controller/productController')

routes.get('/productpage',producatpage)
routes.get('/exsubcategryajex',exsubcategryajex)


module.exports = routes;