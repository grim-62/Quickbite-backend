exports.sendToken = (userid, statusCode , res)=>{
    const option = {
        expires : new Date(Date.now()+ process.env.JWT_EXPIRE * 24 * 60 * 1000),
        httpOnly:true
    }
    res.status(statusCode)
    .cookie("token",token, option)
    .json({success:true , id : userid._id,token})
}