const postmodels=require('../models/postmodel')
const commnetmodels=require('../models/commentModel')
const addCommnet=async(req, res)=>{
    try {
        const postid = req.query.id;
        const post=await postmodels.findOne({_id:postid})
        if (post) {
        const {commnet}=req.body
        const comment = await commnetmodels.create({
           userId:req.user._id,
           postId:postid,
           comment:commnet
        })
        return res.status(200).send({
            success : true,
                messsge:"commnet is sucessfully done",
                comment
        })
        }else{
           return res.status(501).send({
               success : false,
               messsge:"Your post id is wrong",
            
           })

        }   

    } catch (error) {
        return res.status(501).send({
            success : false,
            err : error
        })
    }
}

module.exports={
    addCommnet
}