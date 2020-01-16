const Song = require('./song')
const mongoose = require('mongoose')

const historySchema = new mongoose.Schema({
    songId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Song',
        required: true
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        required:true
    }
})

const History = mongoose.model('Histotory', historySchema)

module.exports = History