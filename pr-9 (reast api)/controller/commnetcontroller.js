const commnetmodels = require('../models/commentmodels')
const postmodels = require('../models/blogmodels')
const addCommnet = async (req, res) => {
    try {
        const postid = req.body.postid;
        const post = await postmodels.findOne({ _id : postid })
        if (post) {
            const commnet = req.body.commnet
            const com = await commnetmodels.create({
                userid: req.user._id,
                postid: postid,
                comment: commnet
            })
            return res.status(200).send({
                success: true,
                messsge: "commnet  sucessfully ",
                com
            })
        } else {
            return res.status(501).send({
                success: false,
                messsge: "post id is wrong",

            })
        }
    } catch (error) {
        return res.status(501).send({
            success: false,
            err: error
        })
    }
}
const viewComment = async (req, res) => {
    try {

        const yourComment = await commentModel.find({})
            .populate('userid', 'name email')
            .populate('blogid', 'title description');
        return res.status(200).send({
            success: true,
            message: "Your comment Fetched Successfully :)",
            yourComment
        })
    } catch (err) {
        return res.status(400).send({
            success: false,
            message: err.message
        });
    }
}

const deleteComment = async (req, res) => {
    try {
        const id = req.query.id;
        let comment = await commentModel.findById(id);
        let delcomment = await commentModel.findByIdAndDelete(id);
        return res.status(200).send({
            success: true,
            message: 'comment deleted Successfully :)',
            delcomment
        });
    }
    catch (err) {
        return res.status(400).send({
            success: false,
            message: err
        });
    }
}
module.exports = {
    addCommnet, deleteComment, viewComment
}