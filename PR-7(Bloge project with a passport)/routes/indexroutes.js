const express = require('express')
const { registerpage, registerusers, loginpage, loginuser, dashbordpage, addbloge, addblougesdata, deletdata, editpage, update,logeout,readmore } = require('../controller/authcontroller')

const routes = express.Router()

const multer = require('multer');
const passport = require('passport');
const st = multer.diskStorage({
    destination: (req, res, cb) => {
        cb(null, 'uploads')
    },
    filename: (req, file, cb) => {
        const uniqname = Date.now();
        cb(null, `${file.fieldname}-${uniqname}`);
    }
})
const fileUpload = multer({ storage: st }).single('image');

routes.get('/', loginpage)
routes.get('/ragisterpage', registerpage)
routes.post('/ragister', registerusers)
routes.post('/loginuser',passport.authenticate('local',{failureRedirect : '/'}), loginuser)
routes.get('/dashbord', passport.checkuser,dashbordpage)

routes.get('/addbloge',passport.checkuser, addbloge)
routes.post('/addblouges',fileUpload, addblougesdata)
routes.get('/deletdata/:id', deletdata)
routes.get('/editpage/:id',passport.checkuser, editpage)
routes.post('/up',fileUpload, update)

routes.get('/logeout',logeout)
routes.get('/readmore/:id',readmore)

module.exports = routes