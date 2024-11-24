const mongoose=require('mongoose')


const userschama=mongoose.Schema({
   name:{
        type:String,
        require:true
    },
   email:{
        type:String,
        require:true
    },
   password:{
        type:String,
        require:true
    },
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

const user=mongoose.model('bloges',userschama)

module.exports=user