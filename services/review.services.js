const Review = require("../model/Reviews");

exports.getAllReviewService = async(req , res) => {
    let service = await Review.find()
    return service;
   
}

exports.getSomeReviewForService = async(req , res) => {
    let id = req.params.id
    console.log(req.id);
    let service = await Review.find({serviceId : id})
    return service;
   
}
exports.saveAReviewService = async(req , res) => {
    let review = req.body
    let service = await Review.create(review)
    return service;
   
}

exports.updateAReviewService = async(req , res) => {
    let updatedReview = req.body
    let id = req.params.id
    let service = await Review.updateOne({_id : id} , updatedReview)
    return service;
   
}
exports.deleteAReviewService = async(req , res) => {
    let id = req.params.id
    let service = await Review.deleteOne({_id : id})
    return service;
   
}
