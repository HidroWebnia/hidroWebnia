const router = require('express').Router()
const { response } = require('express')
const Devices = require('../model/Devices')

router.get('/', async (req, res) =>{
    try {
        const devices = await Devices.find()
        res.json(devices)
    } catch(err) {
        res.status(500).send(err)
    }
})

router.get('/:email', async (req, res) =>{
    try {
        const Measurements = await Devices.find({
            email: req.params.email
        })
        res.json(Measurements)
    } catch(err) {
        res.status(500).send(err)
    }
})

router.get('/detalhes/:id', async (req, res) =>{
    try {
        const device = await Devices.findById(req.params.id)
        res.json(device)
    } catch(err) {
        res.status(500).send(err)
    }
})

router.patch('/:id', async(req, res) => {
    try {
        const updateDevice = await Devices.updateOne(
            {_id: req.params.id},
                {name: req.body.name,
                description: req.body.description,
                image: req.body.image}
        )
        res.json({
            sucess: true,
            updated: updateDevice.nModified
        })
    } catch(err) {
        res.status(500).send(err)
    }
})

router.post('/send', (req, res) => {
    const email = req.body.email
    const name = req.body.name
    const message = req.body.message
    require('../nodemail')(name, email, message)
    .then(response=> res.json(response))
    .catch(err=> res.status(500).send(err))
})


router.post('/', async (req, res) =>{
    try {
        const device = new Devices({
            name: req.body.name,
            description: req.body.description,
            email: req.body.email,
            image: req.body.image,
            measures: req.body.measures
        })
        await device.save()
        res.json(device)
    } catch(err) {
        res.status(500).send(err)
    }
})

router.post('/:id/measures', async (req, res) => {
    try {
        const deviceId = req.params.id
        const newMeasure = req.body
        
        const device = await Devices.findById(deviceId);
        if (!device) {
            return res.status(404).json({ error: 'Dispositivo não encontrado' })
        }

        device.measures.push(newMeasure)
        await device.save()

        res.json(device);
    } catch(err) {
        res.status(500).send(err)
    }
})

router.delete('/:id', async (req, res) => {
    try {
        const device = await Devices.findByIdAndDelete(req.params.id)
        res.json(device)
    } catch(err) {
        res.status(500).send(err)
    }
})

router.put('/:id', async (req, res) => {
    try {
        const device = await Devices.findByIdAndUpdate(req.params.id, req.body, { new: true })
        res.json(device);
    } catch(err) {
        res.status(500).send(err)
    }
})



module.exports = router
