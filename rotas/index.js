const router = require('express').Router()
const Devices = require('../model/Devices')
require('../mongoDB/mongo')

const devices = require('./devices')
router.use('/devices', devices)

router.get('/', (req, res) => {
    res.json({
        sucess:true
    })
})

module.exports = router