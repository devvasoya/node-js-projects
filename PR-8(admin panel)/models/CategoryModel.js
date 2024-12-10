const mongoose = require('mongoose');

const catSchema = mongoose.Schema({
    category_name: {
        type: String,
        required: true,
    },
    status:{
        type:String,
        default:"active"
    }
})
const category = mongoose.model('category', catSchema);
module.exports = category;