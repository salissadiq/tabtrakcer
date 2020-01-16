const auth = require('./routes/auth')
const songs = require('./routes/songs')
const bookmark = require('./routes/bookMark')
const history = require('./routes/history')
const cors = require('cors')
const express = require('express')
const app = express()
require('./db')()
app.use(cors())
app.use(express.json())

app.use('/auth', auth)
app.use('/songs', songs)
app.use('/bookmarks', bookmark)
app.use('/histories', history)

const port = process.env.PORT || 3000
app.listen(3000, ()=>{
    console.log(`server running at port ${port}`)
}) 