const Song = require('../models/song')
const express = require('express');
const router = express.Router();

router.get('/', async(req,res)=>{
    try {
        let songs = null
        const search = new RegExp(req.query.search, 'i');
            if(search){
                songs = await Song.find({$or:['title', 'artist', 'genre', 'album'].map(
                    key=> ({
                        [key]:{
                            $regex: search
                        }
                    })
                )})
            }else{
                songs = await Song.find().limit(10)
            }
                res.send(songs)         
    } catch (ex) {
        res.status(500).send(ex, 'Somthing went wrong.')
    }
})

router.post('/', async(req,res)=>{
    try {
        const song = new Song({
        title: req.body.title,
        artist: req.body.artist,
        genre: req.body.genre,
        album: req.body.album,
        albumImage: req.body.albumImage,
        youtubeId: req.body.youtubeId,
        lyrics: req.body.lyrics,
        tab: req.body.tab
    })

    await song.save()
    res.send(song)
    } catch (ex) {
        res.status(500).send(ex)
    }
})

router.get('/:songId', async(req, res)=>{
   try {
        const song = await Song.findById(req.params.songId)
        if(!song) return res.status(400).send('Song not found')
        res.send(song)
   } catch (ex) {
       res.status(500).send(ex.message)
   }
})

router.put('/:songId', async(req,res)=>{
    try {
        const song = await Song.findById(req.params.songId)
        if(!song) return res.status(404).send('Song Not found')
        song.title = req.body.title,
        song.artist = req.body.artist,
        song.genre = req.body.genre,
        song.album = req.body.album,
        song.albumImage = req.body.albumImage,
        song.youtubeId = req.body.youtubeId,
        song.lyrics = req.body.lyrics,
        song.tab = req.body.tab
        const result = await song.save()
        res.send(result)
    } catch (ex) {
        res.status(500).send(ex)
    }
})

module.exports = router;