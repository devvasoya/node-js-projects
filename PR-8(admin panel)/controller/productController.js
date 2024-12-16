const categoryModel = require("../models/CategoryModel");
const subcategoryModel = require('../models/SubcategoryModel')
const exsubcategoryModel = require('../models/ExsubcategoryModel')
const producatmodel = require('../models/productModel')
const path = require('path')
const fs = require('fs')

const producatpage = async (req, res) => {
    try {
        const category = await categoryModel.find({})
        let subcategory = await subcategoryModel.find({});
        return res.render('productpage', {
            category, subcategory

        })
    } catch (err) {
        console.log(err);
        return false
    }
}

const viewproduct = async (req, res) => {
    try {
        const product = await producatmodel.find({}).populate('categoryId').populate('subcategoryId').populate('exsubcategoryId')
        console.log(product);

        return res.render('viewproduct', {
            product
        })
    } catch (error) {

        console.error("Error fetching products:", error);
        return res.status(500).send("Internal Server Error");
    }
};



const insertproduct = async (req, res) => {
    try {
        const { category, subcategory, exsubcategory, description, price } = req.body
        console.log(req.file.path);
        const user = await producatmodel.create({
            categoryId: category,
            subcategoryId: subcategory,
            exsubcategoryId: exsubcategory,
            description: description,
            price: price,
            image : req.file.path
        })
        

        return res.redirect('/product/viewproduct')
    } catch (err) {
        console.log(err)
        return false;
    }

}

const deleteproduct = async (req, res) => {
    try {
        let id = req.query.id;
        const singel = await producatmodel.findById(id)
        fs.unlinkSync(singel.image)
        await producatmodel.findByIdAndDelete(id);
        return res.redirect('back');
    } catch (err) {
        console.log(err);
        return false;
    }
}

const updateproduct = async(req,res) =>{
    try {
        const { editid, category, subcategory, exsubcategory,description,price } = req.body;

        await producatmodel.findByIdAndUpdate(editid, {
            categoryId: category,
            subcategoryId: subcategory,
            exsubcategoryId: exsubcategory,
            description: description,
            price:price,
        })
        return res.redirect('/product/editexproduct')
    } catch (err) {
        console.log(err);
        return false;
    }
}

const editexproduct = async (req, res) => {
    
        try {
            let id = req.query.id
            let category = await categoryModel.find({});
            let subcategory = await subcategoryModel.find({});
            let exsubcategory = await exsubcategoryModel.find({});
            let single = await producatmodel.findById(id).populate("categoryId").populate("subcategoryId").populate('exsubcategoryId')
            console.log(single);
            
            return res.render('editProduct', {
                category,
                subcategory,
                exsubcategory,
                single
            })
        } catch (err) {
            console.log(err);
            return false;
        }
    
}
const exsubcategryajex = async (req, res) => {
    try {
        const id = req.query.id;
        console.log(id);

        const subcategory = await exsubcategoryModel.find({ subcategoryId: id });

        console.log(subcategory);

        return res.send({
            success: true,
            message: "avi gayu bhai",
            subcategory,
        });
    } catch (err) {
        console.log(err);
        return false
    }
}

module.exports = {
    producatpage, exsubcategryajex, viewproduct, insertproduct, deleteproduct, editexproduct,updateproduct
}