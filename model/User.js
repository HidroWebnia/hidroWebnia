const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    username: {type: String, required: true, unique: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    resetToken: {type: String},
    resetTime: {type: Date},
    name: {type: String, required: true},
    phone: {type: String, required: true},
    emailSchedule: {type: String, required: true},
    address: {type: String, required: true}
})

module.exports = mongoose.model('User', userSchema)