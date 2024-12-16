const express = require('express')

const routes = express.Router();

const {producatpage,exsubcategryajex,viewproduct,insertproduct,deleteproduct,editexproduct} = require('../controller/productController')

routes.get('/productpage',producatpage)
routes.get('/exsubcategryajex',exsubcategryajex)
routes.get('/viewproduct',viewproduct)
routes.post('/insertproduct',insertproduct)
routes.get('/deleteproduct',deleteproduct)
routes.get('/editexproduct',editexproduct)


module.exports = routes;