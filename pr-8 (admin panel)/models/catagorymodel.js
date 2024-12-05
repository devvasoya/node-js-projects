const mongoose = require('mongoose')


const userschama = mongoose.Schema({
    catagori_name : {
        type: String,
        require: true
    },
})

const user = mongoose.model('catagory data', userschama)

module.exports = user