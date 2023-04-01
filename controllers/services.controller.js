const { getAllServicesService, saveAServiceService, updateAServiceService, getAServiceService, deleteAServiceService } = require("../services/service.services")

const getAllService = async (req, res) => {
    try {
        const service = await getAllServicesService(req , res)
        res.status(200).json({
            status: "Success",
            message: "Service Found Seccessfully",
            data: service,
          }); 
    } catch (error) {
        res.status(400).json({
            status: "Failed",
            message: "Service Not Found",
            error: error.message,
          }); 
    }
}
const getAService = async (req, res) => {
    try {
        const service = await getAServiceService(req , res)
        res.status(200).json({
            status: "Success",
            message: "Service Found Seccessfully",
            data: service,
          }); 
    } catch (error) {
        res.status(400).json({
            status: "Failed",
            message: "Service Not Found",
            error: error.message,
          }); 
    }
}

const saveAService = async (req, res) => {
    try {
        const service = await saveAServiceService(req , res)
        res.status(200).json({
            status: "Success",
            message: "Service Added Seccessfully",
            data: service,
          }); 
    } catch (error) {
        res.status(400).json({
            status: "Failed",
            message: "Service Not Added",
            error: error.message,
          }); 
    }
}
const updateAService = async (req, res) => {
    try {
        const service = await updateAServiceService(req , res)
        res.status(200).json({
            status: "Success",
            message: "Service Updated Seccessfully",
            data: service,
          }); 
    } catch (error) {
        res.status(400).json({
            status: "Failed",
            message: "Service Not Updated",
            error: error.message,
          }); 
    }
}
const deleteAService = async (req, res) => {
    try {
        const service = await deleteAServiceService(req , res)
        res.status(200).json({
            status: "Success",
            message: "Service Updated Seccessfully",
            data: service,
          }); 
    } catch (error) {
        res.status(400).json({
            status: "Failed",
            message: "Service Not Updated",
            error: error.message,
          }); 
    }
}


module.exports = {
    getAllService,saveAService,updateAService,getAService,deleteAService
}