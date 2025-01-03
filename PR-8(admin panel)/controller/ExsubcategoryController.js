const CategoryModel = require('../models/CategoryModel');
const subcategoryModel = require('../models/SubcategoryModel');
const ExsubcategoryModel = require('../models/ExsubcategoryModel');

const viewExsubcategorypage = async (req, res) => {
    try {
        let exscategory = await ExsubcategoryModel.find({}).populate('categoryId').populate('subcategoryId');
        return res.render('view_exsubcategory', {
            exscategory
        })
    } catch (err) {
        console.log(err);
        return false;
    }
}

const addExsubcategorypage = async (req, res) => {
    try {
        let category = await CategoryModel.find({});
        let subcategory = await subcategoryModel.find({});
      
        return res.render('add_exsubcategory', {
            category,
            subcategory
        })
    } catch (err) {
        console.log(err);
        return false;
    }
}

const insertExsubcategory = async (req, res) => {
    try {
        
        const { category, subcategory, exsubcategory } = req.body;
        console.log(req.body);
        
        await ExsubcategoryModel.create({
            categoryId: category,
            subcategoryId : subcategory,
            exsubcategory: exsubcategory
        })
        return res.redirect('/exsubcategory');
    } catch (err) {
        console.log(err);
        return false;
    }
}

const editExsubcategory = async (req, res) => {
    try {
        let id = req.query.id
        let category = await CategoryModel.find({});
        let subcategory = await subcategoryModel.find({});
        let single = await ExsubcategoryModel.findById(id).populate("categoryId").populate("subcategoryId")
        console.log(single);
        
        return res.render('edit_exsubcategory', {
            category,
            subcategory,
            single
        })
    } catch (err) {
        console.log(err);
        return false;
    }
}

const deleteExsubcategory = async (req, res) => {
    try {
        let id = req.query.id;
        await ExsubcategoryModel.findByIdAndDelete(id);
        req.flash('danger', 'Exsubcategory delete');
        return res.redirect('back');
    } catch (err) {
        console.log(err);
        return false;
    } 
}

const updateExsubcategory = async (req, res) => {
    try {
        const { editid, category, subcategory, exsubcategory } = req.body;

        // console.log(editid);
        // console.log(category);
        // console.log(subcategory);
        // console.log(exsubcategory);
        // console.log(req.body);

        // await ExsubcategoryModel.findById(editid)
        
        await ExsubcategoryModel.findByIdAndUpdate(editid, {
            categoryId: category,
            subcategoryId: subcategory,
            exsubcategory: exsubcategory
        })
        return res.redirect('/exsubcategory')
    } catch (err) {
        console.log(err);
        return false;
    }
}

//change status
const changeStatus = async (req, res) => {
    try {
        let id = req.query.id;
        let st = req.query.status;

        if (st == "active") {
            await ExsubcategoryModel.findByIdAndUpdate(id, {
                status: "deactive"
            })
            req.flash('danger', 'category deactive');
            return res.redirect('/exsubcategory')
        } else {
            await ExsubcategoryModel.findByIdAndUpdate(id, {
                status: "active"
            })
            return res.redirect('/exsubcategory')
        }
    } catch (err) {
        console.log(err);
        return false;
    }
}

const ajexsubcategory = async (req, res) => {
    try {
        const id = req.query.id;

        // Ensure to use await for asynchronous operation
        const category = await subcategoryModel.find({ categoryId: id });

        console.log(category);

        return res.send({
            success: true,
            message: "avi gayu bhai",
            category,
        });
    } catch (error) {
        console.error("Error fetching subcategories:", error);
        return res.status(500).send({
            success: false,
            message: "An error occurred while fetching subcategories",
            error: error.message,
        });
    }
};



module.exports = {
    viewExsubcategorypage, addExsubcategorypage, insertExsubcategory, deleteExsubcategory, editExsubcategory, updateExsubcategory, changeStatus, ajexsubcategory
}