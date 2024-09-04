const express = require('express')
const cors = require('cors')
require('dotenv').config()
const bodyParser = require('body-parser')
const path = require('path')
const app = express()
const api = require('./rotas/index')
const http = require('http')
const { Server } = require('socket.io')
const mongoose = require('./mongoDB/mongo')
const Devices = require('./model/Devices')

const server = http.createServer(app)
const io = new Server(server, {
  cors: {
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE']
  }
})

const dirname = path.resolve()

app.use(bodyParser.json())
app.use(cors())
app.use(express.json())
app.use('/api', api)
app.use('/uploads', express.static(path.join(dirname, '/uploads')))

app.get('/', (req, res) => {
  res.status(200).json({ msg: 'Bem Vindo a Nossa API!' })
})

const port = process.env.PORT

mongoose.connection.once('open', () => {

  const deviceChangeStream = Devices.watch()

  deviceChangeStream.on('change', async (change) => {
    console.log('Mudança detectada:', change)

    if (change.operationType === 'update') {
      const updatedDevice = await Devices.findById(change.documentKey._id)
      io.emit('deviceUpdated', updatedDevice)
    }
    
  })
})

server.listen(port, () => {
  console.log('App is Running')
})
