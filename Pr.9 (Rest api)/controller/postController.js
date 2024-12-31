const postmodel = require('../models/postmodel');

const addPost = async (req, res) => {
    try {
        const {title, discription} = req.body;

        if (!title || !desc || !req.file ) {
            return res.status(501).send({
                success : false,
                message : "Plaese Fill all fields...",
            })
        }

        const post = await postmodel.create({
            userId : req.user._id,
            title : title,
            discription : discription,
            image : req.file.path,

        })

        return res.status(201).send({
            success: true,
            message: "data add successfully......",
            post
        })

    } catch (error) {
        return res.status(401).send({
            success: false,
            message: err,
        })
    }
}

const viewPost = async(req, res)=>{
    try {
    const users = await postmodel.find({userId:req.user._id}).populate('userId')

    return res.status(200).send({
        success : true,
        messsge:"user  sucessfully fethch",
        users
    })

    } catch (error) {
        return res.status(501).send({
            success : false,
            err : error
        })
    }
}

module.exports ={
    addPost, viewPost
}