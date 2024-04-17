const mongoose = require('mongoose')
mongoose.connect(process.env.DBCONNECT)
module.exports = mongoose