const express = require('express')

const routes = express.Router();

const { subCategoryviewPage,addsubCategoryPage,insertSubcategory,editSubcategory,updateSubcategory,deleteSubcategory,changeStatus } = require('../controller/SubcategoryCantroller');

const passport = require('passport');

routes.get('/',passport.checkUser,subCategoryviewPage);
routes.get('/addsubcategory',passport.checkUser,addsubCategoryPage);
routes.post('/insertsubcategory',insertSubcategory);
routes.get('/editsubcategory',editSubcategory);
routes.post('/updatesubcategory',updateSubcategory);
routes.get('/deletesubcategory',deleteSubcategory);

routes.get('/changestatus', changeStatus);


module.exports=routes;