const mongoose = require('mongoose');
const byrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const userModel = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
         maxLength:[
            15,
            "Password should not exceed more then 15 characters"
        ],
        minLength:[
            6,
            "Password should have  at lest 6 characters"
        ],
        // match:[
        //     /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).{8,1024}$/,
        //     "special/number/capital"
        // ]
    },
    name: {
        type: String,
        required: true,
    },
    profile_picture: String,
    address: String,
    phone_number: String,
    favorite_cuisines: [String],
    dietary_preferences: [String],
    allergies: [String],
    orders: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Order',
    }],
    reviews: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Review',
    }],
}, { timestamps: true });
userModel.pre('save', async function(){
    if(!this.isModified('password')){
        return;
    }
    let salt = await byrypt.genSaltSync(10);
    this.password = byrypt.hashSync(this.password,salt);
})
userModel.methods.comparepassword = function(password){
    return byrypt.compareSync(password,this.password)
}

userModel.methods.getjettocken = function(){
    return jwt.sign(
        {id:this.id},
        process.env.JWT_SECRET,
        {expiresIn:process.env.JWT_EXPIRE}
    )
}


const User = mongoose.model('User', userModel);

module.exports = User;
