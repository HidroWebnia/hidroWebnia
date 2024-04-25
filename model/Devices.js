const mongoose = require('mongoose')
const slug = require('slug')
const { Schema } = mongoose

const deviceSchema = new Schema({
    name: { type: String, required: true, unique: true},
    description: {type: String, required: true},
    email: {type: String, required: true},
    image: {type: String, required: true},
    slug: {type: String, required: true, unique: true, default: function(){ return slug(this.name)}},
    measures: [{
        kwh: {type: Number},
        corrente: {type: Number},
        tensao: {type: Number},
        fp: {type: Number},
        date: {type: Number, default: Date.now()}
    }]

})

module.exports = mongoose.model('Devices', deviceSchema)