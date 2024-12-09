const mongoose = require('mongoose');

const subcatSchema = mongoose.Schema({
    categoryId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "category"
    },
    subcategory: {
        type: String,
        required: true
    },
    status: {
        type: String,
        default: "deactive"
    }
})
const subcategory = mongoose.model('subcategory', subcatSchema);
module.exports = subcategory;