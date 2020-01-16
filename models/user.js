const mongoose = require('mongoose')
const Joi = require('joi')
const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        minlength: 5,
        maxlength: 30
    },
    password: {
        type: String,
        required: true,
        minlength: 6
    }
})

const User = mongoose.model('User', userSchema)

function validateUser(obj) {
    const schema = {
        email: Joi.string().min(5).max(30).required().email(),
        password: Joi.string().min(6).required()
    }
    return Joi.validate(obj, schema)
}
exports.User = User
exports.validate = validateUser