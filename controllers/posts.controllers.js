const { getAllPostsService, getAPostsService, saveAPostsService, updateAPostsService, deleteAPostService } = require("../services/post.services");

const getAllPosts = async (req, res) => {
    try {
        const posts = await getAllPostsService(req , res)
        res.status(200).json({
            status: "Success",
            message: "Posts Found Seccessfully",
            data: posts,
          }); 
    } catch (error) {
        res.status(400).json({
            status: "Failed",
            message: "Posts Not Found",
            error: error.message,
          }); 
    }
}
const getAPost = async (req, res) => {
    try {
        const posts = await getAPostsService(req , res)
        res.status(200).json({
            status: "Success",
            message: "Post Found Seccessfully",
            data: posts,
          }); 
    } catch (error) {
        res.status(400).json({
            status: "Failed",
            message: "Post Not Found",
            error: error.message,
          }); 
    }
}
const saveAPost = async (req, res) => {
    try {
        const posts = await saveAPostsService(req , res)
        res.status(200).json({
            status: "Success",
            message: "Posts Added Seccessfully",
            data: posts,
          }); 
    } catch (error) {
        res.status(400).json({
            status: "Failed",
            message: "Posts Not Added",
            error: error.message,
          }); 
    }
}
const updateAPost = async (req, res) => {
    try {
        const posts = await updateAPostsService(req , res)
        res.status(200).json({
            status: "Success",
            message: "Posts Update Seccessfully",
            data: posts,
          }); 
    } catch (error) {
        res.status(400).json({
            status: "Failed",
            message: "Posts Not Updated",
            error: error.message,
          }); 
    }
}
const deleteAPost = async (req, res) => {
    try {
        const posts = await deleteAPostService(req , res)
        res.status(200).json({
            status: "Success",
            message: "Posts Delete Seccessfully",
            data: posts,
          }); 
    } catch (error) {
        res.status(400).json({
            status: "Failed",
            message: "Posts Not Deleted",
            error: error.message,
          }); 
    }
}


module.exports = {
    getAllPosts,getAPost,saveAPost,updateAPost,deleteAPost
}