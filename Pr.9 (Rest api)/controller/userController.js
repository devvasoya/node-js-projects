const usermodel = require('../models/userModel')

const addUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        if (!name || !email || !password) {
            return res.status(401).send({
                success: false,
                message: "all Fields are required...",
            })
        }

        let duplicate = await usermodel.findOne({name : name, email: email });


        if (duplicate) {
            return res.status(501).send({
                success: false,
                message: "User is Already register.."
            })
        }

        const user = await usermodel.create({
            name: name,
            email: email,
            password: password
        })

        return res.status(200).send({
            success: true,
            message: "user Successfully submitted.........",
            user,
        })



    } catch (err) {
        return res.status(501).send({
            success: false,
            message: err,
        })
    }
}
const viewUser = async (req, res) => {
    try {
        const user = await usermodel.find({})

        return res.status(200).send({
            success: true,
            length: user.length,
            message: "all User",
            user,
        })
    } catch (err) {
        return res.status(501).send({
            success: false,
            message: err,
        })
    }
}

const deleteUser = async (req, res) => {
    try {
        const id = req.query.id;

        await usermodel.findByIdAndDelete(id)
        return res.status(200).send({
            success: true,
            message: "user has Deleted...."
        })
    } catch (err) {
        return res.status(501).send({
            success: false,
            message: err,
        })
    }
}

const updateUser = async (req, res) => {
    try {
        let id = req.query.id;
        const { name, email, password, role } = req.body;

        const editUser = await usermodel.findByIdAndUpdate(id, req.body)
    
        return res.status(200).send({
            success: true,
            message: "user Successfully Updated.........",
            editUser,
        })

    } catch (err) {
        return res.status(501).send({
            success: false,
            message: err,
        })
    }
}
module.exports = {
    addUser, viewUser, deleteUser, updateUser
}