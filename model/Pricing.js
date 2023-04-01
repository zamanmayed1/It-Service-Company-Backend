const mongoose = require('mongoose')

const pricingSchema = mongoose.Schema({
    title : {
        type : String,
        required : true,
    },
    shortdescription : {
        type : String,
        required : true,
    },
    price : {
        type : Number,
        required : true,
    },
    feature : {
        type : [],
        required : true,
    }
},
{
    timestamps: true
})

const Pricing = mongoose.model("Pricing",pricingSchema)

module.exports = Pricing;