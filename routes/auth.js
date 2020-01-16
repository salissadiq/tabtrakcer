const {User, validate} = require('../models/user')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const config = require('config')
const express = require('express')
const router = express.Router()

function jwtToken(user) {
   const ONE_WEEK = 60 * 60 * 24 * 7
   return jwt.sign({user: user._id}, config.get('jwtPrivateKey'), {expiresIn: ONE_WEEK})
}
router.post('/register', async(req, res) => {
   try {
    const { error } = validate(req.body)
    if(error) return res.status(400).send(error.details[0].message)
    const user = new User({
        email: req.body.email,
        password: req.body.password
    })
    const salt = await bcrypt.genSalt(10)
    user.password = await bcrypt.hash(user.password, salt)
    await user.save()
    const userJson = user.toJSON()
     res.send({
        user: userJson,
        token: jwtToken(userJson)
     })
   } catch (ex) {
      if (ex.code === 11000) return res.status(400).send('Email already in use')
      res.status(400).send(ex._message)
   }
})

router.post('/login', async(req,res)=>{
 try {
   const { error } = validate(req.body)
  if(error) return res.status(400).send(error.details[0].message)

  const user = await User.findOne({email: req.body.email})
  if(!user) return res.status(403).send('Invalid email or password')
  const validPassword = bcrypt.compare(req.body.password, user.password)
  if(!validPassword) return res.status(403).send('Invalid email or password')
  const userJson = user.toJSON()
  res.send({
     user: userJson,
     token: jwtToken(userJson)
  })
 } catch (error) {
   //  res.status(500).send('An error hsa occured trying to log in.')
   console.log(error)
 }
})

module.exports = router