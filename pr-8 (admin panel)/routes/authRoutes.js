const express = require('express')

const routes = express.Router()
const { loginPage, ragisterPage,ragisterData,loginUser,dashboardpage,logoutUser,forgetPassword,otpPage} = require('../controller/authController');
const passport = require('passport');

routes.get('/', loginPage);
routes.get('/ragisterpage', ragisterPage)
routes.post('/ragisterdata',ragisterData)
routes.post('/loginuser',passport.authenticate('local' , {failureRedirect: '/'}),loginUser)
routes.get('/dashboard',passport.checkuser,dashboardpage)
routes.get('/logoutUser',logoutUser)


// forget password

routes.post('/forgetpassword',forgetPassword)
routes.get('/otp',otpPage)

module.exports = routes