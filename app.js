const express = require('express')
const app = express()
require('dotenv').config()
const api = require('./rotas/index')
app.use('/api', api)
const port = process.env.PORT

app.get('/', (req, res) => {
    res.json({
        sucess:true
    })
})

app.listen(port, function(){
    console.log('App is Running')
})