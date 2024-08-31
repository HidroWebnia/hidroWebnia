const router = require('express').Router()
const Devices = require('../model/Devices')
require('../mongoDB/mongo')

const devices = require('./devices')
router.use('/devices', devices)
router.use('/auth', require("./auth"))

router.get('/', (req, res) => {
    res.json({
        sucess:true
    })
})

module.exports = router