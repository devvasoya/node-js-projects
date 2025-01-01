const express=require('express')

const routes=express.Router()

routes.use('/user', require('./apiroutes'));
routes.use('/blog', require('./postroutes'));
routes.use('/admin', require('./adminroutes'));
routes.use('/commnet', require('./commnet'));

module.exports=routes