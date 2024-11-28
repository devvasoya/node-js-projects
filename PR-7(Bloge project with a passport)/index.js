const express=require('express')
const port=8000
const app=express()
const db = require('./config/db')
const path = require('path')

app.set('view engine','ejs')

const passport = require('passport')
const passportLocal = require('./config/passportlocal')
const session = require('express-session')
app.use(session({
    secret : 'dev',
    resave : true,
    saveUninitialized : false,
    cookie : {
        maxAge : 1000*60*60*24    }
}))
app.use(passport.session())
app.use(passport.initialize())
app.use(passport.setuser)
app.use(express.urlencoded())


app.use('/uploads',express.static(path.join(__dirname,'uploads')))
app.use('/',require('./routes/indexroutes'))

app.listen(port,(err)=>{
    if (err) {
        console.log(err);
    }
    console.log('server is runing',port);
})