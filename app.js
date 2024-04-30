const express = require('express')
const app = express()
require('dotenv').config()
const cors = require('cors')
const api = require('./rotas/index')

app.use(cors())
app.use(express.json())
app.use('/api', api)

const port = process.env.PORT 

app.listen(port, () => {
    console.log('App is Running')
})
