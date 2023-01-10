const express = require('express')
const router = express.Router()
const Vendor = require('../models/vendor')

router.get('/', async function(req, res){
    try{
        console.log("Get request")
        const vendors = await Vendor.find()
        res.json(vendors)
    }catch(err){
        res.send("Error: "+err)
    }
})

module.exports = router