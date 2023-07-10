const jwt = require('jsonwebtoken');

const fetchUser = (req, res, next) => {
    try{
        const token = req.headers['authorization'].split(' ')[1];
        if(!token){
            return res.status(401).send({
                "success":false,
                "message":"Please authenticate using a valid token"
            })
        }
        const data = jwt.verify(token, process.env.JWT_SECRET);
        req.user = data.userID;
        next();
    }
    catch(err){
        console.log(err);
        res.status(500).send({
            "success":false,
            "message":"Error occurred while fetching user",
            err
        })
    }
}

module.exports = { fetchUser }