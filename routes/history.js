const History = require('../models/hostory')
const express = require('express')
const router = express.Router()

router.get('/', async(req, res)=> {
    try {
        const {userId} = req.query
        const history = await History.find({userId: userId}).populate('songId')
        res.send(history)
    } catch (ex) {
        res.send(500).send(ex)
    }

})

router.post('/', async(req, res) => {
    try {
         const history = req.body
         const exist = await History.findOne({songId: history.songId})
         if(exist) return res.status(200).send('exist')
         const newHistory = new History(history)
         await newHistory.save()
         res.songId(200).send('added')
    } catch (ex) {
        res.status(500).send(ex)
    }
})

module.exports = router