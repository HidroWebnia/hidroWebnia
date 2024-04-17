const express = require('express')
const app = express()
require('dotenv').config()
const api = require('./rotas/index')

app.use(express.json())
app.use('/api', api)

const port = process.env.PORT 

app.get('/', (req, res) => {
    res.json({
        success: true
    })
})

app.listen(port, () => {
    console.log(`App is running on port ${port}`)
})
