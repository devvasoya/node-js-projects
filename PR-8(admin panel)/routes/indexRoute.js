const express = require('express');

const routes = express.Router();

routes.use('/',require('./AuthRoute'));
routes.use('/category',require('./categoryRoute'));
routes.use('/subcategory',require('./SubcategoryRoute'));
routes.use('/exsubcategory',require('./ExsubcategoryRoute'));


module.exports = routes;