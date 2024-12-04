const express  = require('express')

const routes = express.Router()

const{addcatagoryPage} = require('../controller/catagoryController')


routes.get('/addcatagorypage',addcatagoryPage)

module.exports = routes