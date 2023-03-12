const { application } = require('express')
const express = require('express')
const router = express.Router()
const Pharmacist=require('../models/pharmacist')
const Admin = require('../models/admin')
const bcrypt = require('bcryptjs')
//const password = "admin@123"
var hashedPassword  = "$2a$10$DNeHohgPSyw3b.gb1Yo7ruZ0DbqCH3HbUdDUzkq/Scr1z7PCWSjTO"

// bcrypt.genSalt(10, function(err, Salt){
//     // bcrypt.hash(password, Salt, function (err, hash) {
  
//     //     if (err) {
//     //         return console.log('Cannot encrypt');
//     //     }
  
//     //     hashedPassword = hash;
//     //     console.log(hash);
  
//         bcrypt.compare(password, hashedPassword, 
//             async function (err, isMatch) {
  
//             // Comparing the original password to
//             // encrypted password   
//             if (isMatch) {
//                 // console.log('Encrypted password is: ', password);
//                 // console.log('Decrypted password is: ', hashedPassword);
//                 console.log("correct!!!!")
//             }
  
//             if (!isMatch) {
              
//                 // If password doesn't match the following
//                 // message will be sent
//                 console.log(hashedPassword + ' is not encryption of ' 
//                 + password);
//             }
//         })
//     })


router.use(express.json())
// router.post("/login", async function(req,res){
//     console.log("here")
//     let admin = new Admin({
//         name: req.body.name,
//         password: req.body.password
//     });
//     try{
//         let result = await admin.save();
//         res.json(result)
//     }catch(err){
//         res.send("Error: "+err) 
//     }
    
// })

router.post("/login", function(req, res){
    bcrypt.compare(req.body.password, hashedPassword, async function (err, isMatch){
        if(isMatch){
            console.log("correct!!!!")
            //res.json("correct")
            res.send({type:"admin"})
        }
        else{
            console.log("not admin:((((")
            //res.json("incorrect")
            Pharmacist.findOne({email: req.body.email}, function(err, docs){
                const id = docs._id
                if(err){
                    console.log(err)
                    res.send("Error: "+err)
                }
                else if(docs==null){
                    res.send("invalid login")
                }
                else{
                    //console.log("First function call: ", docs)
                    if(req.body.password==docs.password && docs.status=="approved"){
                        //res.json(docs)
                        res.send({type:"pharmacist",id: id})
                        console.log(docs)
                        console.log("valid pharmacist password")
                    }
                    else{
                        console.log("incorrect password")
                        //res.json(null)
                        res.send({type:"invalid login"})
                        
                   }
                }
            })
        }
    })
})

router.use(express.json())


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