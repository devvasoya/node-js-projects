const express=require('express')
const { adddata, viewuser, deleteusers, updateusers,loginuser } = require('../controller/apicontroller')
const { verifyToken, admin } = require('../Midalware/Auth')

const routes=express.Router()

routes.post('/registeruser',adddata) 
routes.get('/viewusers',verifyToken,admin,viewuser) 
routes.delete('/deleteusers',deleteusers) 
routes.put('/updateusers',updateusers) 
routes.post('/loginuser',loginuser)

module.exports=routes