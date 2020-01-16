const mongoose = require('mongoose')
module.exports = () => {
  mongoose.connect('mongodb://sals:t123456@ds263848.mlab.com:63848/tab-tracker', { useNewUrlParser: true })
    .then(console.log('Connected to mongodb'))
    .catch(err => console.log(err))
}