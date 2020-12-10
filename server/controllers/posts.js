const mongoose = require('mongoose');
const PostMessages = require('../models/postMessages');

// get All Messages (Memories)
const getPosts = async (req , res) => {
    try {
        const postMessages  = await PostMessages.find();
        res.status(200).json(postMessages);
    } catch (error) {
        res.status(404).json({message:error.message});
    }
}
//create new post
const createPost = async(req , res) => {
    const post = req.body;
    const NewPost = new PostMessages(post);
    try {
        await NewPost.save();
        res.status(201).json(NewPost)
    } catch (error) {
        res.status(401).json({message:error.message});
    }
}
//update post
const updatePost = async (req ,res) => {
    const {id : _id} = req.params;
    const post = req.body;
    if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No post with that id');
    const updatePost = await PostMessages.findByIdAndUpdate(_id , {...post , _id},{new:true});
    res.json(updatePost);
}

// Delete Post 
const deletePost = async (req , res) => {
    const {id} = req.params;
    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No post witht that id');
    await PostMessages.findByIdAndRemove(id);
    res.json({message:"Post Deleted Successfully"})
}

//Like on post 
const likePost = async (req , res) => {
    const {id} = req.params;
    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No post whith that id');
    const post = await PostMessages.findById(id);
    const updatePost = await PostMessages.findByIdAndUpdate(id , {likeCount: post.likeCount + 1} , {new:true});
    res.json(updatePost);
}

module.exports = {
    getPosts,
    createPost,
    updatePost,
    deletePost,
    likePost
}