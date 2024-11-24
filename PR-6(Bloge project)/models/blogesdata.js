const mongoose=require('mongoose')


const userschama=mongoose.Schema({
    description:{
        type:String,
        require:true
    },
    blogename:{
        type:String,
        require:true
    },
    image:{
        type:String,
        require:true
    }

})

const blogeuser =mongoose.model('bloge user data',userschama)

module.exports=blogeuser    