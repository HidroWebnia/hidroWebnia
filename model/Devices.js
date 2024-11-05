const mongoose = require('mongoose')
const slug = require('slug')
const { Schema } = mongoose

const deviceSchema = new Schema({
    name: { type: String, required: true, unique: true},
    description: {type: String, required: true},
    email: {type: String, required: true},
    image: {type: String},
    registrationDate: {type: Date, required: true, default: Date.now },
    espStatus: {type: Boolean, required: true, default: false},
    lastRequestTime: { type: Date },
    slug: {type: String, required: true, unique: true, default: function(){ return slug(this.name)}},
    user: {type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true},
    measures: [{
        temperature: {type: Number},
        waterTemperature: {type: Number},
        waterFlux: {type: Boolean},
        containerLevel: {type: Number},
        conductivity: {type: Number},
        humidity: {type: Number},
        luminosity: {type: Number},
        ph: {type: Number},
        uv: {type: Number},
        hour: {type: String},
        day: {type: String},
        onlineTime: {type: Number},
        engineStatus: {type: Boolean}
    }]

})

module.exports = mongoose.model('Devices', deviceSchema)