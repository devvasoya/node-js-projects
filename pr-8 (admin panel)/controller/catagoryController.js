const catagoryModel = require('../models/catagorymodel');

const addcatagoryPage = (req, res) => {
    return res.render('add_catagorei')
}

const catagoriAddRecord = async (req, res) => {
    try {
        const { catagori_name } = req.body;
        const user = await catagoryModel.create({ catagori_name: catagori_name })
        return res.redirect('/catagory/viewcatagery')
    } catch (err) {
        console.log(err);
        return false
    }
}

const viewCatagerypage = async (req, res) => {
    try {
        const viewuser = await catagoryModel.find({})
    return res.render('view_catagery',{
        viewuser
    })
    } catch (err) {
        console.log(err);
        return false
    }
}

const deletData = async(req,res) =>{

   try{
    const id = req.query.id;

    await catagoryModel.findByIdAndDelete(id)
    return res.redirect('/catagory/viewcatagery')
   }catch(err){
    console.log(err);
    return false
   }

}

module.exports = {
    addcatagoryPage, catagoriAddRecord, viewCatagerypage,deletData
}