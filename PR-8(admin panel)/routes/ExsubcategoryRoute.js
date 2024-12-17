const express = require('express');

const routes = express.Router();

const { viewExsubcategorypage,addExsubcategorypage,insertExsubcategory,deleteExsubcategory,editExsubcategory,updateExsubcategory,changeStatus,ajexsubcategory } = require('../controller/ExsubcategoryController');

const passport=require('passport')
routes.get('/',passport.checkUser,viewExsubcategorypage);
routes.get('/exaddsubcategory',passport.checkUser,addExsubcategorypage);
routes.post('/insertexsubcategory',insertExsubcategory);
routes.get('/deleteexsubcategory',deleteExsubcategory);
routes.get('/editexsubcategory',passport.checkUser,editExsubcategory);
routes.post('/updateexsubcategory',updateExsubcategory);
routes.get('/changestatus',changeStatus)
routes.get('/ajexsubcategory',ajexsubcategory)

module.exports = routes;
