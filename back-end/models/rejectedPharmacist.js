const mongoose = require('mongoose')

const rejectedPharmacistSchema = new mongoose.Schema({
    pharmacyName:{
        type: String,
        required: true
    },
    email:{
        type:String,
        reqired:true
    },
    password:{
        type: String,
        required: true
    }
})

module.exports = mongoose.model('RejectedPharmacist', rejectedPharmacistSchema)