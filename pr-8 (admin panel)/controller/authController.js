const nodemailer = require('nodemailer');
const usermodel = require('../models/loginUsermodel')

const loginPage = (req, res) => {
    if (res.locals.user) {
        res.redirect('/dashboard')
    }
    return res.render('login');
}
const ragisterPage = (req, res) => {
    return res.render('register')
}
const dashboardpage = (req, res) => {
    return res.render('dashboard')
}
const ragisterData = async (req, res) => {
    try {
        const { name, email, password } = req.body
        const user = await usermodel.create({
            name: name,
            email: email,
            password: password
        })
        return res.render('login')
    } catch (err) {
        console.log(err);
        return false;
    }
}
const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body
        const user = await usermodel.findOne({ email: email, password: password })
        if (!user || user.password != password) {
            console.log("email and password is not match");
            return false;
        }
        return res.redirect('/dashboard')

    } catch (err) {
        console.log(err);
        return false
    }
}
const logoutUser = (req, res) => {
    req.logout((err) => {
        console.log(err);
        return false
    })
    return res.redirect('/')
}

// forget Password 
const forgetPassword = async(req, res) => {
    try{
        const user = await usermodel.findOne({email:req.body.useremail})
        if(!user){
            console.log("user not found");
        }

        // mail send code otp

        const otp = Math.floor(Math.random()*1000000)

        var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
              user: 'devvasoya425@gmail.com',
              pass: 'yourpassword'
            }
          });
          
          var mailOptions = {
            from: 'devvasoya425@gmail.com',
            to: req.body.useremail,
            subject: 'Sending Email using Node.js',
            text: `hii i am dev vasoya your otp is ${otp}`
          };
          
          transporter.sendMail(mailOptions, function(error, info){
            if (error) {
              console.log(error);
            } else {
              console.log('Email sent: ' + info.response);
              return res.redirect('/otp')
            }
          });
        
    }catch(err){
        console.log(err);
        return false;
    }
}

const otpPage = async(req, res) => {
    return res.render('otp')
}

module.exports = {
    loginPage, ragisterPage, ragisterData, loginUser, dashboardpage, logoutUser,forgetPassword,otpPage
}