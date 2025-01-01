
const mongoose = require('mongoose')
const passport = require('passport')


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

const user = mongoose.model('users', userschama)

module.exports = user