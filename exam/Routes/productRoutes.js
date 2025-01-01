const express = require('express')

const routes = express.Router()

const multer = require('multer')
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads')
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    cb(null, file.fieldname + '-' + uniqueSuffix)
  }
})

const upload = multer({ storage: storage }).single('image')
const { addProduct, insertProduct,viewData,deleteproduct,editeproduct,updateproduct,AddtoCrat ,AddtoCratview,deletecart} = require('../controller/productController')

const passport = require('passport') 
routes.get('/addproduct', passport.checkUser,addProduct)
routes.post('/insertproduct',upload, insertProduct)
routes.get('/viewdata',viewData)
routes.get('/deleteproduct',deleteproduct)
routes.get('/editeproduct',passport.checkUser,editeproduct)
routes.post('/updateproduct',upload,updateproduct)
routes.get('/addtocartproduct',AddtoCrat)
routes.get('/AddtoCratview',AddtoCratview)
routes.get('/deletecart',deletecart)

module.exports = routes