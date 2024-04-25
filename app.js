const express = require('express')
const app = express()
require('dotenv').config()
const cors = require('cors')
const api = require('./rotas/index')

app.use(express.json())
app.use(cors())
app.use('/api', api)

const port = process.env.PORT 

if(process.env.NODE_ENV === 'production'){
    app.use(express.static('frontend/build'))

    const path = require('path')
    app.get('*', (req, res => {
        res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'))}
    ))
}

app.listen(port, () => {
    console.log('App is Running')
})
