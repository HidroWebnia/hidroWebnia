const router = require('express').Router()
const Devices = require('../model/Devices')

router.get('/', async (req, res) =>{
    try {
        const devices = await Devices.find()
        res.send(devices)
    } catch {
        res.status(500).send("Erro ao se Conectar com o Servidor")
    }
})

router.post('/', async (req, res) =>{
    try {
        const device = new Devices({
            name: req.body.name,
            kwh: req.body.kwh,
            corrente: req.body.corrente,
            tensao: req.body.tensao,
            fp: req.body.fp
        })
        await device.save()
        res.send(device)
    } catch {
        res.status(500).send("Erro ao se Conectar com o Servidor")
    }
})

router.delete('/:id', async (req, res) => {
    try {
        const device = await Devices.findByIdAndDelete(req.params.id)
        res.send(device)
    } catch {
        res.status(500).send("Erro ao se Conectar com o Servidor")
    }
})

router.put('/:id', async (req, res) => {
    try {
        const device = await Devices.findByIdAndUpdate(req.params.id, {
            name: req.body.name,
            corrente: req.body.corrente,
            kwh: req.body.kwh,
            tensao: req.body.tensao,
            fp: req.body.fp
        })
        res.send(device)
    } catch {
        res.status(500).send("Erro ao se Conectar com o Servidor")
    }
})

module.exports = router
