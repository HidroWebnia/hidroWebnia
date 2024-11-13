const router = require('express').Router()
const upload = require('../config/multer')
const Devices = require('../model/Devices')
const esp32Timer = require('../utils/time')
const { authMiddleware } = require('../middlewares/authMiddleware')

router.get('/', authMiddleware, async (req, res) =>{
    try {
        const devices = await Devices.find({ user: req.user.id })
        res.json(devices)
    } catch(err) {
        res.status(500).send(err)
    }
})

router.get('/detalhes/:id', authMiddleware, async (req, res) =>{
    try {
        const device = await Devices.findOne({ _id: req.params.id, user: req.user.id })
        res.json(device)
    } catch(err) {
        res.status(500).send(err)
    }
})

router.patch('/:id', authMiddleware, upload.single('image'), async (req, res) => {
    try {
        const updateData = {
            name: req.body.name,
            description: req.body.description,
        }

        if (req.file) {
            updateData.image = req.file.path
        }

        const updatedDevice = await Devices.findOneAndUpdate({ _id: req.params.id, user: req.user.id }, updateData, { new: true })

        if (!updatedDevice) {
            return res.status(404).json({ success: false, message: 'Device não encontrado' })
        }

        res.json({
            success: true,
            updatedDevice,
        })
    } catch (err) {
        res.status(500).send(err)
    }
})

router.post('/', authMiddleware, upload.single('image'), async (req, res) =>{
    try {
        const deviceData = {
            name: req.body.name,
            description: req.body.description,
            email: req.body.email,
            user: req.user.id
        }

        if (req.file) {
            deviceData.image = req.file.path
        }

        const device = new Devices(deviceData)
        await device.save()
        res.json(device)
    } catch(err) {
        res.status(500).send(err)
    }
})

router.delete('/:id', authMiddleware, async (req, res) => {
    try {
        const device = await Devices.findOneAndDelete({ _id: req.params.id, user: req.user.id })
        res.json(device)
    } catch(err) {
        res.status(500).send(err)
    }
})

router.put('/:id', async (req, res) => {
    try {
        
        esp32Timer.start()

        const onlineTime = esp32Timer.getElapsedTime()

        const updateData = {
            ...req.body,  
            measures: req.body.measures ? req.body.measures : [] 
        }

        if (updateData.measures.length > 0) {
            updateData.measures[0].onlineTime = onlineTime;
        } else {
            updateData.measures.push({
                onlineTime: onlineTime,
            })
        }

        const device = await Devices.findByIdAndUpdate(req.params.id,{ ...req.body, onlineTime }, { new: true })

        if (!device) {
            return res.status(404).json({ success: false, message: 'Device não encontrado' })
        }

        esp32Timer.resetInactiveTime(() => {
            esp32Timer.stop()
        })

        res.json(device)
    } catch (err) {
        res.status(500).send(err)
    }
})


module.exports = router
