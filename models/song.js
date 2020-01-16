const mongoose =  require('mongoose')

const songSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true,
        minlength: 2
    },
    artist:{
        type: String,
        required: true,
        minlength: 2
    },
    genre:{
        type: String,
        minlength: 2
    },
    album: {
        type: String,
        minlength: 2
    },
    albumImage: {
        type: String,
        minlength: 2
    },
    youtubeId: {
        type: String,
        minlength: 2
    },
    lyrics: {
        type: String,
        minlength: 2
    },
    tab: {
        type: String,
        minlength: 2
    }
})

const Song = mongoose.model('Song', songSchema)

module.exports = Song