const { application } = require('express')
const express = require('express')
const router = express.Router()
const Pharmacist = require('../models/pharmacist')

router.use(express.json())

router.post("/signup", async function(req,res){
    let pharmacist = new Pharmacist({
        pharmacyName: req.body.pharmacyName,
        password: req.body.password
    });
    try{
        let result = await pharmacist.save();
        res.json(result)
    }catch(err){
        res.send("Error: "+err) 
    }
    
})

module.exports = router;