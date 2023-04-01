const Post = require("../model/Post");


exports.getAllPostsService = async(req , res) => {
    let posts = await Post.find()
    return posts;
   
}
exports.getAPostsService = async(req , res) => {
    let id = req.params.id
    let post = await Post.findOne({_id : id})
    return post;
   
}
exports.saveAPostsService = async(req , res) => {
    let postdata = req.body
    let post = await Post.create(postdata)
    return post;
   
}
exports.updateAPostsService = async(req , res) => {
    let updateddata = req.body
    let id = req.params.id
    let post = await Post.updateOne({_id : id} , updateddata)
    return post;
   
}
exports.deleteAPostService = async(req , res) => {
    let id = req.params.id
    let post = await Post.deleteOne({_id : id})
    return post;
   
}
