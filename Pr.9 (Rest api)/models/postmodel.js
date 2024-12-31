const mongoose = require('mongoose');
 
const postSchema = mongoose.Schema({
    userId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
    },
    title:{
        type: String,
        require: true,
    },
    discription:{
        type: String,
        require: true,
    },
    image:{
        type: String,
        require: true,
    },
})

const post = mongoose.model('post', postSchema);

module.exports = post;