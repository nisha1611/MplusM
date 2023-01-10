const { application } = require('express')
const express = require('express')
const router = express.Router()
const Admin = require('../models/admin')

router.use(express.json())
router.post("/login", async function(req,res){
    let admin = new Admin({
        name: req.body.name,
        password: req.body.password
    });
    try{
        let result = await admin.save();
        res.json(result)
    }catch(err){
        res.send("Error: "+err) 
    }
    
})

router.get('/get', async function(req, res){
    try{
        console.log("Get request")
        const aliens = await Admin.find()
        res.json(admin)
    }catch(err){
        res.send("Error: "+err)
    }
})

module.exports = router