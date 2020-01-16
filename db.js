const mongoose = require('mongoose')
module.exports = () => {
  mongoose.connect('mongodb://localhost/tab_tracker', { useNewUrlParser: true })
    .then(console.log('Connected to mongodb'))
    .catch(err => console.log(err))
}