const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true, 'Please add name'],
        trim:true,
    },
    email:{
        type:String,
        required:[true, 'Please add email'],
        unique:true,
        trim:true,
    },
    password:{
        type:String,
        required:[true, 'Please add Password'],
        min:6,
        max:18,
    },
    role:{
        type:String,
        default:'User',
    },
},
{timestamps:true}
);

module.exports = mongoose.model('User', userSchema);