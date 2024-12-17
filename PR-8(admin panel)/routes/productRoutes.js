const express = require('express')

const routes = express.Router();

const {producatpage,exsubcategryajex,viewproduct,insertproduct,deleteproduct,editexproduct,updateproduct,changestatus} = require('../controller/productController')
const multer = require('multer')

const st = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads')
    },
    filename: function (req, file, cb) {
      const unique = Math.round(Math.random() * 10000000)
      cb(null, file.fieldname + '-' + unique)
    }
  })
  
const upload = multer({ storage: st }).single('image')
const passport = require('passport')

routes.get('/productpage',passport.checkUser,producatpage)
routes.get('/exsubcategryajex',exsubcategryajex)
routes.get('/viewproduct',passport.checkUser,viewproduct)
routes.post('/insertproduct',upload,insertproduct)
routes.get('/deleteproduct',deleteproduct)
routes.get('/editexproduct',passport.checkUser,editexproduct)
routes.post('/updateproduct',upload,updateproduct)
routes.get('/changestatus',changestatus)


module.exports = routes;