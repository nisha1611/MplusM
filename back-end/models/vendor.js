const mongoose = require('mongoose')
const Product = require('./product')

const vendorSchema = new mongoose.Schema({
    vendorName:{
        type: String,
        //length
        required: true
    },
    pharmacyName:{
        type: String,
        required: true
    },
    productList:{
        //type: Product.schema
        type: Array()
    },
    contact:{
        type: Number,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    address:{
        type: String,
        required: true
    },
    GSTno:{
        type: Number,
        required: true
    },
    liscenseNo:{
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Vendor', vendorSchema)