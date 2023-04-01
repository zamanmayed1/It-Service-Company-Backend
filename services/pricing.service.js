const Pricing = require("../model/Pricing");

exports.getAllPricingService = async(req , res) => {
    // let ids = ["642887eb6eb884d27026e300" ,'642887d56eb884d27026e2fc'] {_id: {$in: ids} }

    let service = await Pricing.find().limit(5)
    return service;
   
}

exports.saveAPricingService = async(req , res) => {
    let pricing=  req.body
    let service = await Pricing.create(pricing)
    return service;
   
}
exports.updateAPricingService = async(req , res) => {
    let id = req.params.id
    let pricing=  req.body
    let service = await Pricing.updateOne({_id : id}, pricing)
    return service;
   
}
exports.deleteAPricingService = async(req , res) => {
    let id = req.params.id
    let service = await Pricing.deleteOne({_id : id})
    return service;
   
}