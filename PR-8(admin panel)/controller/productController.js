const categoryModel = require("../models/CategoryModel");
const subcategoryModel = require('../models/SubcategoryModel')
const exsubcategoryModel = require('../models/ExsubcategoryModel')

const producatpage = async(req,res) =>{
    try{
        const category = await categoryModel.find({})
        return res.render('productpage',{
            category 

        })
    }catch(err){
        console.log(err);
        return false
    }
}
const exsubcategryajex = async(req,res) => {
    try{
        const id = req.query.id;
        console.log(id);
        
        const subcategory = await exsubcategoryModel.find({ subcategoryId : id });

        console.log(subcategory);

        return res.send({
            success: true,
            message: "avi gayu bhai",
            subcategory,
        });
    }catch(err){
        console.log(err);
        return false
    }
}

module.exports = {
    producatpage,exsubcategryajex
}