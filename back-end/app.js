const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const url = 'mongodb://0.0.0.0:27017/AlienDBex'
const alienRouter = require('./routes/aliens')
const vendorRouter = require('./routes/vendors')
const productRouter = require('./routes/products')
const adminRouter = require('./routes/admin')

const app = express()

mongoose.connect(url, {useNewUrlParser:true})
const con = mongoose.connection

con.on('open', function(){
    console.log("connected....")
})

app.use(express.json())
const bodyParser = require("body-parser")
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors())


app.use('/mplusm/aliens', alienRouter)
app.use('/mplusm/admin', adminRouter)
app.use('/mplusm/vendors', vendorRouter)
app.use('/mplusm/products',productRouter)

app.listen(9000, function(){
    console.log("server started")
})