const CategoryModel = require('../models/CategoryModel');
const subcategoryModel = require('../models/SubcategoryModel');

const subCategoryviewPage = async (req, res) => {
    try {
        let scategory = await subcategoryModel.find({}).populate("categoryId")
        return res.render('view_subcategory', {
            scategory

        });
    } catch (err) {
        console.log(err);
        return false;
    }
}

const addsubCategoryPage = async (req, res) => {
    try {
        let category = await CategoryModel.find({ status: "active" });
        return res.render('add_subcategory', {
            category
        });
    } catch (err) {
        console.log(err);
        return false;
    }
}

const insertSubcategory = async (req, res) => {
    try {
        const { category, subcategory } = req.body;
        await subcategoryModel.create({
            categoryId: category,
            subcategory: subcategory
        })
        return res.redirect('/subcategory');
    } catch (err) {
        console.log(err);
        return false;
    }
}

const editSubcategory = async (req, res) => {
    try {
        let id = req.query.id
        let category = await CategoryModel.find({});
        let single = await subcategoryModel.findById(id).populate("categoryId")
        return res.render('edit_subcategory', {
            category,
            single
        })
    } catch (err) {
        console.log(err);
        return false;
    }
}

const updateSubcategory = async (req, res) => {
    try {
        const { editid, category, subcategory } = req.body;
        await subcategoryModel.findByIdAndUpdate(editid, {
            categoryId: category,
            subcategory: subcategory
        })
        return res.redirect('/subcategory')
    } catch (err) {
        console.log(err);
        return false;
    }
}

const deleteSubcategory = async (req, res) => {
    try {
        let id = req.query.id;
        await subcategoryModel.findByIdAndDelete(id);
        req.flash('danger', 'Subcategory delete');
        return res.redirect('/subcategory');
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
            await subcategoryModel.findByIdAndUpdate(id, {
                status: "deactive"
            })
            req.flash('danger', 'category deactive');
            return res.redirect('/subcategory')
        } else {
            await subcategoryModel.findByIdAndUpdate(id, {
                status: "active"
            })
            return res.redirect('/subcategory')
        }
    } catch (err) {
        console.log(err);
        return false;
    }
}

module.exports = {
    subCategoryviewPage, addsubCategoryPage, insertSubcategory, editSubcategory, updateSubcategory, deleteSubcategory, changeStatus
}