const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    
    productName:{
        type: String,
       // required: true
    },
    productDescription:{
        type:String,
        //required:true
    },
    quantity:{
        type:String,
        //required:true
    },
    // mfgDate:{  //is it required?
    //     type: String,
    //     required: true
        
    // },
    // expDate:{
    //     type: String,
    //     required: true
    // },
    brand:{
        type: String,
       // required: true
    },
    pharmacyName:{
        type:String,
        //required:true
    },
    price:{
        type: Number,
        //required: true
    },
    catagory: {
        type: String,
        //enum: ['tablets','ointments','creams','skincare','haircare','syrups','other'],
        default: 'other'
    }
})

module.exports = mongoose.model('Product', productSchema)