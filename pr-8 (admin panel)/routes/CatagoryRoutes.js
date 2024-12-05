const express  = require('express')

const routes = express.Router()

const{addcatagoryPage,catagoriAddRecord,viewCatagerypage,deletData} = require('../controller/catagoryController')


routes.get('/addcatagorypage',addcatagoryPage)
routes.get('/viewcatagery',viewCatagerypage)
routes.post('/catagoriAddRecord',catagoriAddRecord)
routes.get('/deletdata',deletData)


module.exports = routes