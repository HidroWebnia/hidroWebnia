const router = require('express').Router()
const upload = require('../config/multer')
const Devices = require('../model/Devices')
const esp32Controller = require('../controllers/esp32Controller')

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

router.patch('/:id', upload.single('image'), async (req, res) => {
    try {
        const updateData = {
            name: req.body.name,
            description: req.body.description,
        }

        if (req.file) {
            updateData.image = req.file.path
        }

        const updatedDevice = await Devices.findByIdAndUpdate(req.params.id, updateData, { new: true })

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

router.post('/', upload.single('image'), async (req, res) =>{
    try {
        const device = new Devices({
            name: req.body.name,
            description: req.body.description,
            email: req.body.email,
            image: req.file.path
        })
        await device.save()
        res.json(device)
    } catch(err) {
        res.status(500).send(err)
    }
})

router.post('/activity', esp32Controller.handleActivity)


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


module.exports = router
