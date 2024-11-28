
const usermodels = require('../models/usermodels')

const path = require('path')
const fs = require('fs')
const blogeuser = require('../models/blogesdata')

const registerpage = (req, res) => {
    return res.render('res')
}
const loginpage = (req, res) => {
    if(req.cookies['auth']){
        return res.redirect('/dashbord')
    }
    return res.render('login')
}

const registerusers = async (req, res) => {
    try {
        const { name, email, password } = req.body
        await usermodels.create({
            name: name,
            email: email,
            password: password,
        })
        return res.redirect('/')
    } catch (error) {
        console.log(error);
    }
}

const loginuser = async (req, res) => {
    try {
        const { email, password } = req.body
        const user = await usermodels.findOne({ email: email });

        if (!user || user.password != password) {
            console.log("email and password is not match");
            return false;
        }
        res.cookie('auth', user)
        return res.redirect('/dashbord')
    } catch (err) {
        console.log(err);
        return false;
    }
}

const dashbordpage = async (req, res) => {
    
    try {
        if(!req.cookies['auth']){
            return res.redirect('/')
        }
        const { blogename, description, image } = req.body

        const user = await blogeuser.find({});

        return res.render('dashbord', {
            user
        });

    } catch (error) {
        console.log(err);
        return false;
    }
};

const addbloge = (req, res) => {
    if(!req.cookies['auth']){
        return res.redirect('/')
    }
    return res.render('addbloge')
}

const addblougesdata = async (req, res) => {
    try {
        const { blogename, description } = req.body
        const user = await blogeuser.create({
            blogename: blogename,
            description: description,
            image: req.file.path
        })
        return res.redirect('dashbord')
    } catch (err) {
        console.log(err);
        return false;
    }
}

const deletdata = async (req, res) => {
    try {

        let id = req.params.id;
        let single = await blogeuser.findById(id);
        fs.unlinkSync(single.image);
        await blogeuser.findByIdAndDelete(req.params.id);
        console.log(`user delete`)
        return res.redirect('/dashbord');
    } catch (err) {
        console.log(err);
        return false;
    }
}

const editpage = async (req, res) => {
    try {
        if(!req.cookies['auth']){
            return res.redirect('/')
        }
        let id = req.params.id;
        let single = await blogeuser.findById(id);
        return res.render('edit', {
            single
        })
    } catch (err) {
        console.log(err);
        return false;
    }
}

const update = async (req, res) => {
    try {
        const { id, blogename, description } = req.body;
        if (req.file) {
            let single = await blogeuser.findById(id);
            fs.unlinkSync(single.image);
            await blogeuser.findByIdAndUpdate(id, {
                blogename: blogename,
                description: description,
                image: req.file.path
            })
            console.log("record update");
            return res.redirect('/dashbord');
        } else {
            const { id, blogename, description } = req.body;
            let single = await blogeuser.findById(id);

            const up = await blogeuser.findByIdAndUpdate(id, {
                blogename: blogename,
                description: description,
                image: single.image
            })
            console.log("user update");
            return res.redirect('/dashbord')
        }
    } catch (err) {
        console.log(err);
        return false;
    }
}

const logeout = async (req, res) => {
   res.clearCookie('auth')
   return res.redirect('/');
}

const readmore = async (req,res) => {
    try {
        let id = req.params.id
        console.log(id);
       
        
        let single = await blogeuser.findById(id);
        return res.render('readmore', {
            single
        })
    } catch (err) {
        console.log(err);
        return false;
    }
}


module.exports = {
    registerpage, registerusers, loginpage, loginuser, dashbordpage, addbloge, addblougesdata, deletdata, editpage, update, logeout, readmore
}