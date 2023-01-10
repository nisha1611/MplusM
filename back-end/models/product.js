const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    id:{
        type: String,
        required: true
    },
    productName:{
        type: String,
        required: true
    },
    mfgDate:{  //is it required?
        type: Date,
        required: true
    },
    expDate:{
        type: Date,
        required: true
    },
    brand:{
        type: String,
        required: true
    },
    price:{
        type: Number,
        required: true
    },
    category:{
        type: String, //tbd
    }
})

module.exports = mongoose.model('Product', productSchema)