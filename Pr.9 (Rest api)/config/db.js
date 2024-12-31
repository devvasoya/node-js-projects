const mongoose = require('mongoose');

const db = async () => {
    try {
        await mongoose.connect('mongodb+srv://Hiren:Hiren2866@cluster0.9jzej.mongodb.net/add_API');

        console.log('DB was Connect......');
        
    } catch (error) {
        console.log(error);
        return false;
    }
}

module.exports = db();