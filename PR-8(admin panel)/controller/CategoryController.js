const CategoryModel = require('../models/CategoryModel');

const addCategoryPage = (req, res) => {
    return res.render('add_category')
}

const viewCategoryPage = async (req, res) => {
    try {
        let categories = await CategoryModel.find({})
        return res.render('view_category', {
            categories
        })

    } catch (err) {
        console.log(err);
        return false;
    }

}

const insertCategory = async (req, res) => {
    try {
        await CategoryModel.create({
            category_name: req.body.category
        });
        req.flash('success', 'category create');
        return res.redirect('/category/addcategory')
    } catch (err) {
        console.log(err);
        return false;
    }
}

const deleteCategory = async (req, res) => {
    try {
        let id = req.query.id;
        await CategoryModel.findByIdAndDelete(id);
        req.flash('danger', 'category delete');
        return res.redirect('back');
    } catch (err) {
        console.log(err);
        return false;
    }
}

const editCategory = async (req, res) => {
    try {
        let id = req.query.id;
        let single = await CategoryModel.findById(id);
        return res.render('edit_category', {
            single
        })
    } catch (err) {
        console.log(err);
        return false;
    }
}

const updateCategory = async (req, res) => {
    try {
        const { editid, category } = req.body;
        await CategoryModel.findByIdAndUpdate(editid, {
            category_name: category,
        })
        return res.redirect('/category/viewcategory');
    }
    catch (err) {
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
            await CategoryModel.findByIdAndUpdate(id, {
                status: "deactive"
            })
            req.flash('danger', 'category deactive');
            return res.redirect('/category/viewcategory')
        } else {
            await CategoryModel.findByIdAndUpdate(id, {
                status: "active"
            })
            return res.redirect('/category/viewcategory')
        }
    } catch (err) {
        console.log(err);
        return false;
    }
}

module.exports = {
    addCategoryPage, viewCategoryPage, insertCategory, deleteCategory, editCategory, updateCategory, changeStatus
}