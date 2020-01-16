const Bookmark = require('../models/bookmark')
const express = require('express')
const router = express.Router()
router.get('/', async(req, res) => {
    try {
        const {songId, userId} = req.query
        const query = {
            userId: userId
        }
        if(songId) {
            query.songId = songId
        }
        const bookmark = await Bookmark.find(query).populate('songId')
        res.send(bookmark)
    } catch (ex) {
        res.status(500).send(ex)
    }
})

router.post('/', async(req, res) => {
    try {
      const bookmark = req.body
      const songId = req.body.songId
      const booked = await Bookmark.findOne({songId: songId})
      if(booked) return res.status(400).send({'error': 'This set is already booked'})
      const newbookmark = new Bookmark(bookmark)
      await newbookmark.save()
      res.send(newbookmark)
    } catch (ex) {
        res.status(500).send(ex)
    }
})

router.delete('/:id', async(req, res) => {
    try {
        const bookmark = await Bookmark.findByIdAndDelete(req.params.id)
        res.send(bookmark)
    } catch (ex) {
        res.status(500).send(ex)
    }
});
module.exports = router

