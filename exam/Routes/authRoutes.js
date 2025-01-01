const express = require('express')

const routes = express.Router()
const { loginpage,ragister,ragisterUser,loginUser,adminView } = require('../controller/authController')
const passport = require('passport') 

routes.get('/',loginpage)
routes.post('/loginuser',passport.authenticate('local', { failureRedirect: '/' }),loginUser)
routes.get('/ragister',ragister)
routes.post('/ragisteruser',ragisterUser)

routes.get('/adminview',passport.checkUser,adminView)





module.exports = routes

