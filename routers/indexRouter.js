const express = require('express');
const { asyncErrors } = require('../middleware/tryCatch');
const userModel = require('../models/userModel');
const { sendToken } = require('../utils/sendToken');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(201).json({message : "1-1ome page"})
})

router.post('/signup',async(req,res,next)=>{
    const user = await userModel(req.body).save()
    sendToken(user,201,res)
})

router.get('/msg', asyncErrors(async(req, res, next) => {

}))

module.exports = router