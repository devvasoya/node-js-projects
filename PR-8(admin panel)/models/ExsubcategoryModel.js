const mongoose = require('mongoose');

const exsubcatSchema = mongoose.Schema({
    categoryId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "category"
    },
    subcategoryId: {
        type: String,
        ref: "subcategory"
    },
    exsubcategory: {
        type: String,
        required: true
    },
    status: {
        type: String,
        default: "deactive"
    }
})
const exsubcategory = mongoose.model('exsubcategory', exsubcatSchema);
module.exports = exsubcategory;