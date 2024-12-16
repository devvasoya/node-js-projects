const mongoose = require('mongoose')

const connectDB = async () => {
    try{
        await mongoose.connect(`mongodb+srv://Devvasoya:devvasoya1234@cluster0.xz8ir.mongodb.net/adminpanel`)
        console.log('MongoDB Connected')
    }catch(err){
        console.error(err);
        return false
    }
}

module.exports = connectDB();