const router = require('express').Router()
const Devices = require('../model/Devices')

const THREE_MINUTE = 180000

router.get('/', async (req, res) =>{
    try {
        const devices = await Devices.find()
        res.json(devices)
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

router.post('/espStatus/:id', async (req, res) => {
    try {

        const {espStatus, measures} = req.body
        const device = await device.findById(req.params.id)

        if(!device){
            return res.status(404).json({ msg: 'Device não encontrado!' })
        }

        device.espStatus = espStatus
        device.lastRequestTime = new Date()
        device.measures = measures
        await device.save()

        res.json({ sucess: true, device })

    } catch (err) {
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
        res.json(device)
    } catch(err) {
        res.status(500).send(err)
    }
})

async function checkInactiveDevices() {
    const devices = await Devices.find()
    const now = new Date()

    devices.forEach(async (device) => {
        if ((now - new Date(device.lastRequestTime)) > THREE_MINUTE) {
            device.espStatus = false
            await device.save()
        }
    })
}

setInterval(checkInactiveDevices, THREE_MINUTE)

module.exports = router
