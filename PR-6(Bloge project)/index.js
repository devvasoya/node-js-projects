const express=require('express')
const port=8000
const app=express()
const db = require('./config/db')
const path = require('path')

app.set('view engine','ejs')

app.use(express.urlencoded())
app.use('/uploads',express.static(path.join(__dirname,'uploads')))
app.use('/',require('./routes/indexroutes'))

app.listen(port,(err)=>{
    if (err) {
        console.log(err);
    }
    console.log('server is runing',port);
})