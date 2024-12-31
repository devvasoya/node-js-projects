const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
    
    try {

        const token = req.headers.authorization;

        if(!token){
            return res.status(501).send({
                success : false,
                message: "token is require"
            })
        }

        const newtoken = token.slice(7);
        
        jwt.verify(newtoken, 'admin', (err, decode)=> {
            if(err){
                return res.status(401).send({
                    success : false,
                    message : "Token is not valid"
                })
            }
            req.user = decode.payload;
            return next();
        })
        
    } catch (error) {
        return res.status(401).send({
            success : false,
            err : error
        })
    }
}

const onlyAdmin = async (req, res, next) => {

    try {
        if(req.user.role != "admin"){
            return res.status(501).send({
                success : false,
                message: "Only Admin can access....."
            })  
        }
        return next();
    } catch (error) {
        return res.status(401).send({
            success : false,
            err : error
        })
    }
}

module.exports = {
    verifyToken, onlyAdmin
};