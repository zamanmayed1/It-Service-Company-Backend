const mongoose = require('mongoose')

const serviceSchema = mongoose.Schema({
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
    price : {
        type : Number,
        required :[true , "Please give a Service Price"] 
    },
    status : {
        type : String,
        required :[true , "Please give a Status"] ,
        enum : ["active", "stopped"]
    },
   
},{
    timestamps: true
}) 


const Service = mongoose.model('Service' , serviceSchema)


module.exports = Service