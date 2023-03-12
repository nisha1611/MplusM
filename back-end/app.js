const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const path= require('path')
const url = 'mongodb://0.0.0.0:27017/MplusM'
const alienRouter = require('./routes/aliens')
const vendorRouter = require('./routes/vendors')
const productRouter = require('./routes/products')
const adminRouter = require('./routes/admin')
const pharmacistRouter = require('./routes/pharmacist')
const productsRouter = require('./routes/products')
//const approvedPharmacistRouter= require('./routes/approvedPharmacist')
const upload=require('./middleware/upload')

const app = express()

mongoose.connect(url, {useNewUrlParser:true})
const con = mongoose.connection

con.on('open', function(){
    console.log("connected....")
})

app.use(express.json())
const bodyParser = require("body-parser")
//const approvedPharmacist = require('./models/approvedPharmacist')
app.use('/uploads', express.static('uploads'))
app.use(bodyParser.urlencoded({ extended: false })); //true
app.use(bodyParser.json())
//app.use('/static',express.static(path.join(__dirname + '/uploads')))

app.use(cors())


//app.use('/mplusm/aliens', alienRouter)
app.use('/mplusm/admin', adminRouter)
app.use('/mplusm/vendors', vendorRouter)
app.use('/mplusm/products',productRouter)
app.use('/mplusm/pharmacist',pharmacistRouter)
app.use('/mplusm/products',productsRouter)
//app.use('/mplusm/approvedPharmacist',approvedPharmacistRouter)
app.use('/mplusm/uploads',express.static('uploads'))

app.listen(9000, function(){
    console.log("server started")
})