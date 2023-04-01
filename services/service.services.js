const Service = require("../model/Service");

exports.getAllServicesService = async(req , res) => {
    let service = await Service.find()
    return service;
   
}
exports.getAServiceService = async(req , res) => {
    let id  = req.params.id
    let service = await Service.findOne({_id : id})
    return service;
   
}

exports.saveAServiceService = async(req , res) => {
    let serviceItem = req.body
    let service = await Service.create(serviceItem)
    return service;

}

exports.updateAServiceService = async(req , res) => {
   let id = req.params.id
    let updatedserviceItem = req.body
    let service = await Service.updateOne({_id : id}, updatedserviceItem)
    return service;
}

exports.deleteAServiceService = async(req , res) => {
   let id = req.params.id
    let updatedserviceItem = req.body
    let service = await Service.deleteOne({_id : id})
    return service;
}