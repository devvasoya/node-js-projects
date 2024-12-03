const mongoose = require('mongoose')


const userschama = mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    }
})

const user = mongoose.model('loginuser data', userschama)

module.exports = user