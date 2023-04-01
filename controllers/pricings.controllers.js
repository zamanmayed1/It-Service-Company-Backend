const { getAllPricingService, saveAPricingService, updateAPricingService, deleteAPricingService } = require("../services/pricing.service");

const getAllPricing = async(req, res) => {

    try {
        const service = await getAllPricingService(req , res)
        res.status(200).json({
            status: "Success",
            message: "Pricing Found Seccessfully",
            data: service,
          }); 
    } catch (error) {
        res.status(400).json({
            status: "Failed",
            message: "Pricing Not Found",
            error: error.message,
          }); 
    }

}
const saveAPricing = async(req, res) => {

    try {
        const service = await saveAPricingService(req , res)
        res.status(200).json({
            status: "Success",
            message: "Pricing Found Seccessfully",
            data: service,
          }); 
    } catch (error) {
        res.status(400).json({
            status: "Failed",
            message: "Pricing Not Found",
            error: error.message,
          }); 
    }

}
const updateAPricing = async(req, res) => {

    try {
        const service = await updateAPricingService(req , res)
        res.status(200).json({
            status: "Success",
            message: "Pricing Found Seccessfully",
            data: service,
          }); 
    } catch (error) {
        res.status(400).json({
            status: "Failed",
            message: "Pricing Not Found",
            error: error.message,
          }); 
    }

}
const deleteAPricing = async(req, res) => {

    try {
        const service = await deleteAPricingService(req , res)
        res.status(200).json({
            status: "Success",
            message: "Pricing Found Seccessfully",
            data: service,
          }); 
    } catch (error) {
        res.status(400).json({
            status: "Failed",
            message: "Pricing Not Found",
            error: error.message,
          }); 
    }

}


module.exports = {
    getAllPricing,saveAPricing,updateAPricing,deleteAPricing
}