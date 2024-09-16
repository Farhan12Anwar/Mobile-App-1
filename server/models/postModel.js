const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({
    title:{
        type:String,
        required:[true, 'Please add post title'],
        trim:true,
    },
    description:{
        type:String,
        required:[true, 'Please add post description'],
        unique:true,
        trim:true,
    },
    postedBy:{
        type:mongoose.Schema.ObjectId,
        ref:'User',
        required:true
    },
},
{timestamps:true}
);

module.exports = mongoose.model('Post', postSchema);