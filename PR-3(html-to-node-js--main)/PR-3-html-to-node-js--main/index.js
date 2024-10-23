const express = require('express')

const port = 9000;

const app = express();

app.set('view engine','ejs');

const path = require('path');

app.use('/',express.static(path.join(__dirname,'/public')))

app.get('/',(req,res)=>{
    return res.render('index')
})

app.get('/charts',(req,res)=>{
    return res.render('charts')
})

app.get('/widgets',(req,res)=>{
    return res.render('widgets')
})

app.get('/table',(req,res)=>{
    return res.render('table')
})

app.get('/grid',(req,res)=>{
    return res.render('grid')
})

app.get('/form-basic',(req,res)=>{
    return res.render('form-basic')
})

app.get('/form-wizard',(req,res)=>{
    return res.render('form-wizard')
})

app.get('/pages-buttons',(req,res)=>{
    return res.render('pages-buttons')
})

app.get('/icon-material',(req,res)=>{
    return res.render('icon-material')
})

app.get('/icon-fontawesome',(req,res)=>{
    return res.render('icon-fontawesome')
})

app.get('/elements',(req,res)=>{
    return res.render('elements')
})

app.get('/index2',(req,res)=>{
    return res.render('index2')
})

app.get('/pages-gallery',(req,res)=>{
    return res.render('pages-gallery')
})

app.get('/calendar',(req,res)=>{
    return res.render('calendar')
})

app.get('/pages-invoice',(req,res)=>{
    return res.render('pages-invoice')
})

app.get('/pages-chat',(req,res)=>{
    return res.render('pages-chat')
})

app.get('/login-page',(req,res)=>{
    return res.render('login-page')
})

app.get('/register-page',(req,res)=>{
    return res.render('register-page')
})


app.get('/error-403',(req,res)=>{
    return res.render('error-403')
})

app.get('/error-404',(req,res)=>{
    return res.render('error-404')
})

app.get('/error-405',(req,res)=>{
    return res.render('error-405')
})

app.get('/error-500',(req,res)=>{
    return res.render('error-500')
})

app.listen(port,(err)=>{
    if(err){
        console.log(err);
        return false;
    }
    console.log('server is running...');
    
})