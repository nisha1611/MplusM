
const mongoose = require('mongoose')
const {Schema}=mongoose

const orderSchema = mongoose.Schema({
    customerName: {
        type: String,
        required: true
    },
    status: {
        type: String,  //pending, approved, rejected, dispatched, delivered
        required: true,
        default: "pending"
    },
    pharmacyId:{
        type: Schema.Types.ObjectId,
        ref:'Pharmacist'
    },
    pharmacyName: {
        type: String,
        required: true
    },
    prescription:{
        type:String,
        required:true
    },
    products:{
        type:String,
        required:true
    }
    // products: [{
    //     productName:String ,
    //     qty:String,
        
    // }]
})

module.exports = mongoose.model('Order', orderSchema)