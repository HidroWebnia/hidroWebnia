const router = require('express').Router()
const upload = require('../config/multer')
const Devices = require('../model/Devices')
const esp32Controller = require('../controllers/esp32Controller')
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
        const device = new Devices({
            name: req.body.name,
            description: req.body.description,
            email: req.body.email,
            image: req.file.path,
            user: req.user.id
        })
        await device.save()
        res.json(device)
    } catch(err) {
        res.status(500).send(err)
    }
})

router.post('/activity', esp32Controller.handleActivity)


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
        const device = await Devices.findByIdAndUpdate(req.params.id, req.body, { new: true })
        res.json(device)
    } catch(err) {
        res.status(500).send(err)
    }
})


module.exports = router
