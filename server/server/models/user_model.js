const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    UserID: { type: String, required: true },
    status: {type: String, required: true },
    firstname: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    address: { type: String, required: true },
    telno: { type: String, required: true },
    token: { type: String, required: false, default: null }
}, { collection: 'Users' })

module.exports = mongoose.model('userSchema', userSchema)