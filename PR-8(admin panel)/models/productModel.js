const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    categoryId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "category"
    },
    subcategoryId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "subcategory"
    },
    exsubcategory: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "exsubcategory"
    },
    product:{
        type : String,
        require : true
    },
    status: {
        type: String,
        default: "active"
    }
})
const productModel = mongoose.model('productModel', productSchema);
module.exports = productModel;