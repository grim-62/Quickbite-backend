const mongoose = require('mongoose');

exports.connectDb = async()=>{
    try {
        await mongoose.connect(process.env.MONGODB_URL);
        console.log("DataBase Connection Establised");
    } catch (error) {
        console.log(error);
    }
}