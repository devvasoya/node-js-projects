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
    exsubcategoryId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "exsubcategory"
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    status: {
        type: String,
        default: "active"
    }
})
const productModel = mongoose.model('productModel', productSchema);
module.exports = productModel;