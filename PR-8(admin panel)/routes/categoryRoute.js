const express = require('express');

const routes=express.Router();

const { addCategoryPage, viewCategoryPage, insertCategory, deleteCategory, editCategory, updateCategory,changeStatus } = require('../controller/CategoryController');

const passport = require('passport')

routes.get('/addcategory',passport.checkUser,addCategoryPage);
routes.get('/viewcategory',passport.checkUser,viewCategoryPage);
routes.post('/insertcategory',insertCategory);
routes.get('/deletecategory',deleteCategory);
routes.get('/editcategory',passport.checkUser,editCategory);
routes.post('/updatecategory', updateCategory);

routes.get('/changestatus', changeStatus);



module.exports=routes;