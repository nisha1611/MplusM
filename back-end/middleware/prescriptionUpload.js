const path = require('path')
const multer = require('multer')
const {uuid} = require('uuidv4')
//upload prescription
var storagePrescription=multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,'PrescriptionsUpload/')
    },
    filename:function (req,file,cb){
        let ext=path.extname(file.originalname)
        //cb(null,Date.now()+ext)
        cb(null,uuid()+'-'+Date.now()+path.extname(file.originalname))
    }
})
var prescriptionUpload =multer({
    storage:storagePrescription,
    fileFilter:function(req,file,callback){
        if(
            file.mimetype=="image/png"||
            file.mimetype=="image/jpg"||
            file.mimetype=="image/jpeg"||
            file.mimetype=="application/pdf"
            
        ){
            callback(null,true)
        }else{
            console.log("only jpg & png format supported")
            callback(null,false)
        }
    },
    limits:{
        fileSize:1024*1024*2
    }
})
module.exports =prescriptionUpload