const express = require('express');

const routes = express.Router();

const { loginPage, loginUser, dashboardPage, registerPage, registerUser, logout, forgotPassword, otpPage, postOtp, newpass, postNewpassword, myProfile, profileChange, postChangepassword, changePassword } = require('../controller/AuthController');

const passport = require('passport');

// login 
routes.get('/', loginPage);
routes.get('/register', registerPage);
routes.post('/loginUser', passport.authenticate('local', { failureRedirect: '/' }), loginUser);
routes.post('/registerUser', registerUser);
routes.get('/dashboard', passport.checkUser, dashboardPage);
routes.get('/logout', logout);

// forget pass
routes.post('/forgotpassword', forgotPassword);
routes.get('/otp', passport.checkUser, otpPage)
routes.post('/postotp', postOtp)
routes.get('/newpass', passport.checkUser, newpass)
routes.post('/postnewpassword', postNewpassword)

//my profile
routes.get('/myprofile', passport.checkUser, myProfile);
routes.post("/profilechange", profileChange);

//change pass
routes.get('/changepassword', passport.checkUser, changePassword);
routes.post('/postChangepassword', postChangepassword);



module.exports = routes;