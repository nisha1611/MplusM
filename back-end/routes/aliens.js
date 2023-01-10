const express = require('express')
const router = express.Router()
const Alien = require('../models/alien')

router.get('/', async function(req, res){
    try{
        console.log("Get request")
        const aliens = await Alien.find()
        res.json(aliens)
    }catch(err){
        res.send("Error: "+err)
    }
})

//to get a particular alien
router.get('/:id', async function(req, res){
    try{
        const alien = await Alien.findById(req.params.id)
        res.json(alien)
    }catch(err){
        res.send("Error: "+err)
    }
})

router.post('/', async function(req, res){
    const alien = new Alien({
        name: req.body.name,
        tech: req.body.tech,
        sub: req.body.sub
    })
    try{
        const a1 = await alien.save()
        res.json(a1)
    }catch(err){
        res.send("Error: "+err) 
    }
})

module.exports = router