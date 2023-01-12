const mongoose = require('mongoose')

const pharmacistSchema = new mongoose.Schema({
    pharmacyName:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Pharmacist', pharmacistSchema)