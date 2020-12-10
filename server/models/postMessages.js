const mongoose = require('mongoose');

const schema = mongoose.Schema({
    title:String,
    message:String,
    creator:String,
    tags:[String],
    selectedFile:String,
    likeCount:{
        type:Number,
        default:0
    },
    createdAt:{
        type:Date,
        default:new Date()
    }
});

const PostMessages = mongoose.model('PostSchema' , schema);

module.exports = PostMessages;