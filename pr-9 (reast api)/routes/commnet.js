const express=require('express')

const routes=express.Router()

const { verifyToken } = require('../Midalware/Auth')

const { addCommnet,viewComment,deleteComment } = require('../controller/commnetcontroller')

routes.post('/addcommnet',verifyToken,addCommnet)
routes.post('/viewcomment',viewComment)
routes.post('/deleteComment',deleteComment)

module.exports=routes