const router = require('express').Router()
const Devices = require('../model/Devices')

router.get('/', async (req, res) =>{
    const device = await Device.find()
    return res.send(device)
})

router.post('/', async (req, res) =>{
    const device = new Device({
        name: req.body.name,
        corrente: req.body.corrente,
        tensao: req.body.tensao,
        fp: req.body.fp
    })
    await device.save()
    return res.send(device)
})

router.delete('/:id', async (req, res) => {
    const device = await Device.findByIdAndDelete(req.params.id)
    return res.send(device)
})

router.put('/:id', async (req, res) => {
    const device = await Device.findByIdAndUpdate(req.params.id, {
        name: req.body.name,
        corrente: req.body.corrente,
        tensao: req.body.tensao,
        fp: req.body.fp
    })
    return res.send(device)
})

module.exports = router