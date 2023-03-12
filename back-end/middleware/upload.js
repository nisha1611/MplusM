const path = require('path')
const multer = require('multer')
const {uuid} = require('uuidv4')

var storage=multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,'uploads/')
    },
    filename:function (req,file,cb){
        let ext=path.extname(file.originalname)
        //cb(null,Date.now()+ext)
        cb(null,uuid()+'-'+Date.now()+path.extname(file.originalname))
    }
})
var upload=multer({
    storage:storage,
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





module.exports =upload
