const mongoose=require('mongoose')

const commentSchema = mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
       ref:'user'
    },
    postId:{
        type:mongoose.Schema.Types.ObjectId,
         ref:'post'
    },
    comment:{
        type:String,
        require:true
    }
})
const Comment=mongoose.model('Comment',commentSchema)
module.exports=Comment