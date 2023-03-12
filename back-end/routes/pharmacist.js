const path=require('path')
const { application } = require('express')
const express = require('express')
const router = express.Router()
const Pharmacist = require('../models/pharmacist')
const upload = require('../middleware/upload')
const prescriptionUpload= require('../middleware/prescriptionUpload')
const Order=require('../models/order')
const url = require('url')
const fs = require('fs')
const http = require('http')

router.use(express.json())
router.get('/list', async function(req, res){
    try{
        console.log("Get request")
        const pharmacist = await Pharmacist.find()
        res.json(pharmacist)
    }catch(err){
        res.send("Error: "+err)
    }
})

router.post("/signup",upload.single('license') ,async function(req,res){
    console.log("post api")
    console.log(req.body.pharmacyName)
    //console.log("req.body.license"+req.file.filename)
    console.log(req.protocol)
    //const url = req.protocol + '://' + req.get('host')
    const url = req.protocol + '://' + "localhost:9000"
    let pharmacist = new Pharmacist({
        pharmacyName: req.body.pharmacyName,
        address:req.body.address,
        pharmacyOwnerName:req.body.pharmacyOwnerName,
        aadharNo:req.body.aadharNo,
        panNo:req.body.panNo,
        email:req.body.email,
        contact:req.body.contact,
        GSTNo:req.body.GSTNo,
        licenseNo:req.body.licenseNo,
        //license:req.file.path, //originalname
      // license: url + '/uploads/' + req.file.path,
      license: url + '/uploads/' + req.file.filename,
        password: req.body.password,
        status:req.body.status
    })
    console.log(url + '/uploads/' + req.file.filename)
    console.log("req.file.path"+req.file.path)
    // var licenseData=Pharmacist.license.find()
    var success = req.file.filename+"uploaded successfully";
    
    if(req.file){
        pharmacist.license=req.file.path
        console.log("file chosen")
    }
 
    try{
        let result = await pharmacist.save();
        // licenseData.exec(function(err,data){
        //     if(err) throw err;
        //     res.send('upload-file',{title:'Upload-file',records:data, success:success})

        // })
        res.send(result)
        // const filePath=req.file.path
        // const urlLink= url.pathToFileURL(filePath)
        // console.log(url.pathToFileURL(filePath))
        //res.send(filePath)
        //  const imgUrl = `http://localhost:3000/mplusm/pharmacist/${urlLink}`
        //  res.send(imgUrl)
        //  console.log(imgUrl)
        //res.redirect('/getLicense')
        console.log("result:"+result)
    }catch(err){
        res.send("Error: "+err) 
    }
    console.log("details received" + pharmacist)
    console.log("req.body.license"+req.file.originalname)
    
})

router.post("/login",  function(req,res){
  
    Pharmacist.findOne({email:req.body.email},function(err,pharmacyUser){
         console.log("api reached")
         if (pharmacyUser){
            
             console.log("First function call : ", pharmacyUser);
             res.json(pharmacyUser)
             const userPassword=req.body.password
             if(pharmacyUser.password==userPassword){
                console.log("user verified")
             }else{
                console.log("wrong credentials")
             }
         }
         else{
            console.log("Error : ",err);
            
         }
     }).clone().catch(function(err){ console.log(err)})
 });


 
 router.get('/approvedList', async function(req, res){
    try{
        console.log("Get request")
        const pharmacy = await Pharmacist.find({status:"approved"})
        res.json(pharmacy)
    }catch(err){
        res.send("Error: "+err)
    }
})

router.post("/approvePharmacy", async function(req,res){
    try{
        const pharmacy=await Pharmacist.findOneAndUpdate({_id:req.body._id},{status:"approved"},{new:true})
        res.send(pharmacy)
    }catch(error){
        res.send("Error")
    }  
})

router.get('/rejectedList', async function(req, res){
    try{
        console.log("Get request")
        const pharmacy = await Pharmacist.find({status:"rejected"})
        res.json(pharmacy)
    }catch(err){
        res.send("Error: "+err)
    }
})

router.post("/rejectPharmacy", async function(req,res){
    try{
        const pharmacy=await Pharmacist.findOneAndUpdate({_id:req.body._id},{status:"rejected"},{new:true})
        res.send(pharmacy)
    }catch(error){
        res.send("Error")
    }     
})

router.get('/orderList', async function(req, res){
    try{
        console.log("Get request")
        console.log(req.body)
        //console.log(url + '/PrescriptionsUpload/' + req.file.filename)
        const order = await Order.find({pharmacyId:req.body})
        //console.log(order[0].prescription)
        res.json(order)
    }catch(err){
        res.send("Error: "+err)
    }
})

router.post("/order",prescriptionUpload.single('prescription') ,async function(req,res){
    console.log("post api")
    //console.log(req.body.pharmacyName)
    //console.log("req.body.license"+req.file.filename)
    console.log(req.protocol)
    //const url = req.protocol + '://' + req.get('host')
    const url = req.protocol + '://' + "localhost:9000"
    let order = new Order({
        customerName:req.body.customerName,
        pharmacyName: req.body.pharmacyName,
        products:req.body.products,
       // pharmacyId: Pharmacist.findById(),
        //license:req.file.filename, //originalname
        //prescription: url + '/PrescriptionsUpload/' + req.file.filename,
        prescription: url + '/PrescriptionUploads/' + req.file.path,
        status:req.body.status 
    })
    console.log(url + '/PrescriptionsUpload/' + req.file.filename)    
    if(req.file){
        order.prescription=req.file.path
        console.log("file chosen")
    } 
    try{
        let result = await order.save();
        res.send(result)
        console.log("result:"+result)
    }catch(err){
        res.send("Error: "+err) 
    }
    console.log("details received" + order)
    console.log("req.body.license"+req.file.originalname)
    // try{
    //     const a1 = await pharmacist.save()
    //     //res.json(a1)
    // }catch(err){
    //     res.send("Error: "+err) 
    // }   
})

router.post("/approveOrder", async function(req, res){
    try{
        const orders = await Order.findOneAndUpdate({_id: req.body._id},{status:"approved"},{new: true})
        res.send(orders)
    }catch(err){
        res.send("Error: "+err)
    }
})

router.post("/dispatchOrder", async function(req,res){
    try{
        const orders = await Order.findOneAndUpdate({_id: req.body._id}, {status:"dispatched"},{new:true})
        res.send(orders)
    }catch(err){
        res.send("Error: "+err)
    }
})

router.post("/deliverOrder", async function(req,res){
    try{
        const orders = await Order.findOneAndUpdate({_id:req.body._id},{status:"delivered"},{new:true})
        res.send(orders)
    }catch(err){
        res.send("Error: "+err)
    }
})

router.post("/rejectOrder", async function(req, res){
    try{
        const orders = await Order.findOneAndUpdate({_id: req.body._id},{status:"rejected"},{new:true})
        res.send(orders)
    }catch(err){
        res.send("Error: "+err)
    }
})

module.exports = router;