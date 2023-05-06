const mongoose = require('mongoose')
// const { Schema } = mongoose;
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        require: true
    },
    email: {
        type: String,
        unique: true,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    phone: {
        type: String,
        require: true
    },
    hobby: {
        type: String,
    },
    role: {
        type: Number,
        default: 0  // 0. user  , 1. admin 
    },
    cart:{
            type:Array
        },
    BuyNow      :{
            type:Array
        }
},
{versionKey: false}

)

const users = new mongoose.model('Users', userSchema)

module.exports = users;