const mongoose = require('mongoose')

const postSchema = mongoose.Schema({
    imageUrl : {
        type : String,
        required :[true , "Please give a Service Title"] 
    },
    title : {
        type : String,
        required :[true , "Please give a Service Title"] 
    },
    shortDescription : {
        type : String,
        required :[true , "Please give a Service Short Description"] 
    },
    longDescription : {
        type : String,
        required :[true , "Please give a Service Long Description"] 
    }, 
    viewCount : {
        type : Number,
        default : 0
    }
},{
    timestamps: true
}) 


const Post = mongoose.model('Post' , postSchema)


module.exports = Post