const mongoose = require('mongoose')

const pharmacistSchema = new mongoose.Schema({
    pharmacyName:{
        type: String,
        //required: true
    },
    pharmacyOwnerName:{
        type:String,
        //required:true
    },
    address:{
        type:String,
        //required:true
    },
    aadharNo:{
        type:String,
        //required:true
    },
    panNo:{
       type:String,
       //required:true 
    },
    contact:{
        type:String,
        //required:true
    },
    email:{
        type:String,
        //reqired:true,
        unique:true
    },
    password:{
        type: String,
        //required: true
    },
    
    license:{
        type:String,
        data:Buffer,
        contentType:String
    
        
        //required:true
    },
    licenseNo:{
        type:String
       // required:true
    },
    GSTNo:{
        type:String,
        //required:true
    },
    status: {
        type: String,
        default:"pending"
        
    }
})

module.exports = mongoose.model('Pharmacist', pharmacistSchema)