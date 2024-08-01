const mongoose = require('mongoose')

const dbUser = process.env.DB_USER
const dbPass = process.env.DB_PASS

mongoose.connect(`mongodb+srv://${dbUser}:${dbPass}@test.7ts2zqd.mongodb.net/?retryWrites=true&w=majority&appName=Test`)
    .then(() => {
        console.log('Conectado ao MongoDB')
    })
    .catch(err => console.error(err))

module.exports = mongoose