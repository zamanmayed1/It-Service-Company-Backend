const { getAllReviewService, saveAReviewService, updateAReviewService, deleteAReviewService, getSomeReviewForService } = require("../services/review.services");

const getAllReview = async(req, res) => {
    try {
        const service = await getAllReviewService(req , res)
        res.status(200).json({
            status: "Success",
            message: "Review Found Seccessfully",
            data: service,
          }); 
    } catch (error) {
        res.status(400).json({
            status: "Failed",
            message: "Review Not Found",
            error: error.message,
          }); 
    }

}
const getReviewsForService = async(req, res) => {
    try {
        const service = await getSomeReviewForService(req , res)
        res.status(200).json({
            status: "Success",
            message: "Review Found Seccessfully",
            data: service,
          }); 
    } catch (error) {
        res.status(400).json({
            status: "Failed",
            message: "Review Not Found",
            error: error.message,
          }); 
    }

}
const saveAReview = async(req, res) => {
    try {
        const service = await saveAReviewService(req , res)
        res.status(200).json({
            status: "Success",
            message: "Review Found Seccessfully",
            data: service,
          }); 
    } catch (error) {
        res.status(400).json({
            status: "Failed",
            message: "Review Not Found",
            error: error.message,
          }); 
    }

}
const updateAReview = async(req, res) => {
    try {
        const service = await updateAReviewService(req , res)
        res.status(200).json({
            status: "Success",
            message: "Review Found Seccessfully",
            data: service,
          }); 
    } catch (error) {
        res.status(400).json({
            status: "Failed",
            message: "Review Not Found",
            error: error.message,
          }); 
    }

}
const deleteAReview = async(req, res) => {
    try {
        const service = await deleteAReviewService(req , res)
        res.status(200).json({
            status: "Success",
            message: "Review Found Seccessfully",
            data: service,
          }); 
    } catch (error) {
        res.status(400).json({
            status: "Failed",
            message: "Review Not Found",
            error: error.message,
          }); 
    }

}

module.exports = {
    getAllReview , saveAReview,updateAReview , deleteAReview,getReviewsForService
} 