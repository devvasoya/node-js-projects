const passport = require('passport');

const passportLocal = require('passport-local').Strategy

const usermodel = require('../models/loginUsermodel');

passport.use(new passportLocal({
    usernameField: 'email',
}, async (email, password, done) => {
    try {
        const user = await usermodel.findOne({ email: email })
        if (!user || user.password != password) {
            console.log("email and password is not match");
            return done(null, false);
        }
        return done(null, user);
    } catch (err) {
        console.log(err);
        return done(null, false);
    }
}))

passport.serializeUser((user, done) => {
    return done(null, user.id)

})

passport.deserializeUser(async (id, done) => {
    try {
        const user = await usermodel.findById(id)
        return done(null, user)
    } catch (err) {
        console.log(err);
        return done(err, null);
    }
})

passport.checkuser = (req, res, next) => {
    if (req.isAuthenticated()) {
        return next();
    }
    return res.redirect('/');
}

passport.setuser = (req, res, next) => {
    if (req.isAuthenticated()) {
        res.locals.user = req.user;
    }
    return next();
}

module.exports = passport