const jwt = require('jsonwebtoken');
const Errorhandler = require('../utils/Errorhandler')
const { asyncErrors } = require('../middleware/tryCatch')

exports.isAuthanticated =  asyncErrors(async(req,res,next)=>{
    const {token} = req.cookies;
    if(!token){
        return next(new Errorhandler("login to access the page",401))
    }
    const {id} = jwt.varify(token, process.env.JWT_SECRET)
    req.id = id;
    next();
})