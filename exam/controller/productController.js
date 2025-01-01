const { log } = require('console')
const productmodel = require('../models/productModel')
const cartmodel = require('../models/cartmodel')
const fs = require('fs')
const cart = require('../models/cartmodel')
const addProduct = (req, res) => {
    return res.render('addproduct')
}

const viewData = async (req, res) => {
    try {

        const user = await productmodel.find({});

        return res.render('viewdata', {
            user
        });

    } catch (error) {
        console.log(err);
        return false;
    }
    // return res.render('viewdata')
}
const insertProduct = async (req, res) => {
    try {
        const { productName, price, description, qty } = req.body
        const user = await productmodel.create({
            productName: productName,
            price: price,
            description: description,
            qty: qty,
            image: req.file.path
        })
        return res.redirect('/product/viewdata')
    } catch (err) {
        console.log(err);
        return false;
    }

}
const deleteproduct = async (req, res) => {
    try {
        const id = req.query.id

        let single = await productmodel.findById(id);
        fs.unlinkSync(single.image);

        await productmodel.findByIdAndDelete(id);
        return res.redirect("/product/viewdata");
    } catch (err) {
        console.log(err);
        return false;
    }
}
const editeproduct = async (req, res) => {
    try {
        const id = req.query.id;

        const product = await productmodel.findById(id)
        return res.render('editproduct', {
            product
        });
    } catch (err) {
        console.log(err);
        return false;
    }
}
const updateproduct = async (req, res) => {
    try {
        const { editid, productName, description, price, qty } = req.body;

        if (req.file) {
            const single = await productmodel.findById(editid);


            fs.unlinkSync(single.image);
            await productmodel.findByIdAndUpdate(editid, {
                productName: productName,
                description: description,
                price: price,
                qty: qty,
                image: req.file.path
            });
            return res.redirect("/product/viewdata");
        } else {
            const product = await productmodel.findById(editid);

            await productmodel.findByIdAndUpdate(editid, {
                productName: productName,
                description: description,
                price: price,
                qty: qty,
                image: product.image
            });
            return res.redirect("/product/viewdata");
        }
    } catch (err) {
        console.log(err);
    }
}


// const addtocartproduct = async(req, res) => {
//    try{
//     const id = req.query.id;
//     const product = await productmodel.findById(id);
//     return res.render('addtocart', {
//         product
//     });

//    }catch(err){
//     console.log(err);
//     return false;
//    }
// }

const AddtoCrat = async (req, res) => {
    try {
        const id = req.query.id;
        console.log(id);

        const product = await productmodel.findById(id);
        console.log(product);

        await cartmodel.create({
            productName: product.productName,
            price: product.price,
            qty: product.qty,
            description: product.description,
            image: product.image,
        });

        // Redirect to the cart view after adding the product
        return res.redirect('/product/AddtoCratview');
    } catch (err) {
        console.log(err);
        return false;
    }
};
const AddtoCratview = async (req, res) => {
    try {
        const Cratitem = await cartmodel.find({}); // Fetch cart items
        console.log(Cratitem);

        // Render the EJS file with Cratitem data
        return res.render('addtocart', { Cratitem });
    } catch (err) {
        console.log(err);
        return false;
    }
};
const deletecart =  async (req, res) =>{
    try {
        const id =req.query.id;
        const product = await cartmodel.findByIdAndDelete(id);

         return res.redirect('/product/AddtoCratview');     
    } catch (err) {
        console.log(err);
        return false;
    }
}


module.exports = {
    addProduct, insertProduct, viewData, deleteproduct, editeproduct, updateproduct, AddtoCrat,AddtoCratview,deletecart
}