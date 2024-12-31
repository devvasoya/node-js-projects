const postmodel = require('../models/postmodel')
const commentmodel = require('../models/commentModel')

 
const allPost=async(req, res)=>{
   try {
    const post = await postmodel.find({}).populate('userId')

    return res.status(200).send({
        success:true,
        message:'view all post',
        post

    })
   } catch (error) {
    return res.status(501).send({
        success : false,
        err : error
    })
   }
}


const allCommnet = async(req, res)=>{
    try {

        const allcommnet= await commentmodel.find({}).populate('userId').populate('postId')
        return res.status(200).send({
            success:true,
            message:'view all cpmmnet',
            allcommnet
    
        })

    } catch (error) {
        return res.status(501).send({
            success : false,
            err : error
        })
    }
}
module.exports={
    allPost,allCommnet
}