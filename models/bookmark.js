const Song = require('./song')
const mongoose = require('mongoose')

const bookmarkSchema = new mongoose.Schema({
    songId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Song',
        required: true
    },
    userId:{
        type: mongoose.Schema.Types.ObjectId,        
        required: true
    }
})

const Bookmark = mongoose.model('Bookmark', bookmarkSchema)

module.exports = Bookmark