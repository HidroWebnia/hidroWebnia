const mongoose = require('mongoose')
const slug = require('slug')
const { Schema } = mongoose

const deviceSchema = new Schema({
    name: { type: String, required: true, unique: true},
    slug: {type: String, required: true, unique: true, default: function(){ return slug(this.name)}},
    corrente: {type: Number, required: true},
    tensao: {type: Number, required: true},
    fp: {type: Number, required: true}
})

module.exports = mongoose.model('Devices', deviceSchema)