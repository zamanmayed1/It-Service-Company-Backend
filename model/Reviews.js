const mongoose = require('mongoose')

const reviewSchema = mongoose.Schema({
    userPhoto : {
        type : String,
        required :[true , "Please give a userPhoto"] 
    },
    review : {
        type : String,
        required :[true , "Please give a review"] 
    }, 
    serviceId : {
        type : String,
    }, 
    postId : {
        type : String,
    }, 
    reviewCount : {
        type : Number,
        default : 3,
        max: [5 ,"review not will be over 5"],
        min : [1 ,"review not will be under 1"]
    }
},{
    timestamps: true
}) 


const Review = mongoose.model('Review' , reviewSchema)


module.exports = Review