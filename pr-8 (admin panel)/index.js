const express = require('express')

const port = 8000;

const app = express();
const path = require('path');
const database = require('./config/db')

app.set('view engine','ejs');
const passport = require('passport');

const passportLocal = require('./config/passportlocal')
const session = require('express-session')
app.use(session({
    secret : 'dev',
    resave : true,
    saveUninitialized : false,
    cookie : {
        maxAge : 1000*60*60*24    }
}))
app.use(passport.initialize())
app.use(passport.session())
app.use(passport.setuser)
app.use('/',express.static(path.join(__dirname,'/public')))
app.use(express.urlencoded());
app.use('/',require('./routes/indexRoute'))


app.listen(port,(err)=>{
    if(err){
        console.log(err);
        return false;
    }
    console.log('server is running...');
    
})