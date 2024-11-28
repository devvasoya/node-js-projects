const passport = require('passport')

const passportLocal = require('passport-local').Strategy;

const usermodels = require('../models/usermodels')

passport.use(new passportLocal({
    usernameField: 'email'
}, async (email, password, done) => {
    try{
        let user = await usermodels.findOne({email : email})

        if(!user || user.password !== password){
            console.log("email and password is wrong !");
            return done(null,false)
        }
        return done(null,user)
    }catch(err){
        console.log(err);
      return done(null,false)
    }
}))

passport.serializeUser((user,done)=>{
    return done(null,user._id);
})

passport.deserializeUser(async(id,done)=>{
    try{
        let user = await usermodels.findById(id)
        return done(null,user)
    }catch(err){
      return done(null,false);
    }
})

passport.checkuser = (req,res,next)=>{
    if(!req.isAuthenticated()){
        return res.redirect('/')
    }
    return next();
}

passport.setuser = (req,res,next) =>{
    if(req.isAuthenticated()){
        res.locals.user = req.user;
    }
    return next();
}

module.exports = passport