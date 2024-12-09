const express = require('express');

const routes = express.Router();

const { viewExsubcategorypage,addExsubcategorypage,insertExsubcategory,deleteExsubcategory,editExsubcategory,updateExsubcategory,changeStatus } = require('../controller/ExsubcategoryController');

routes.get('/',viewExsubcategorypage);
routes.get('/exaddsubcategory',addExsubcategorypage);
routes.post('/insertexsubcategory',insertExsubcategory);
routes.get('/deleteexsubcategory',deleteExsubcategory);
routes.get('/editexsubcategory',editExsubcategory);
routes.post('/updateexsubcategory',updateExsubcategory);
routes.get('/changestatus',changeStatus)

module.exports = routes;
