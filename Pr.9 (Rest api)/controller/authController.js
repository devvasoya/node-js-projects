const jwt = require('jsonwebtoken')
const usermodel = require('../models/userModel')

const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        

        if (!email || !password) {
            return res.status(501).send({
                success: false,
                message: "Email And Password are required...."
            })
        }

        const user = await usermodel.findOne({ email: email })
        

        if (!user || user.password != password) {
            return res.status(501).send({
                success: false,
                message: "Email And Password are not valid...."
            })
        }

        const token = await jwt.sign({payload: user }, "admin", { expiresIn: '1d' })

        return res.status(200).send({
            success: true,
            message: "Login Successfully...",
            token : token
        })      

    } catch (error) {
        return res.status(401).send({
            success : false,
            err : error
        })
    }


}

module.exports = {
    loginUser
}