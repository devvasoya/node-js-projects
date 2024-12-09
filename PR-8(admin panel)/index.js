const express = require('express');

const port = 8000;

const app = express();

const db = require('./config/db');

app.set('view engine', 'ejs');

const path = require('path');

const cookieParser = require('cookie-parser')
app.use(cookieParser());

const flash = require('connect-flash')

app.use('/', express.static(path.join(__dirname, '/public')))

//passport
const passport = require('passport');
const passportLocal = require('./config/passportLocal');
const session = require('express-session');
app.use(session({
    secret: 'rnwadmin',
    resave: true,
    saveUninitialized: true,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24
    }    
}))
app.use(passport.session());
app.use(passport.initialize());
app.use(passport.setUser);
//passport 
app.use(flash());

app.use((req,res,next)=>{
    res.locals.massage=req.flash();
    return next();
})

app.use(express.urlencoded());

app.use('/', (require('./routes/indexRoute')));

app.listen(port, (err) => {
    if (err) {
        console.log(err);
        return false;
    }
    console.log(`server is start on port :- ${port}`);
})