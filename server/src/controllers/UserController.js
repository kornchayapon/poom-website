const {User} = require('../models')

module.exports = {
  index (req, res) {
    res.send('get all user')
  },

  create (req, res) {
    res.send('OK I created user')
  },

  put (req, res) {
    res.send('OK I updated user')
  },

  remove (req, res) {
    res.send('OK I deleted user')
  },

  show (req, res) {
    res.send('get user by id')
  }
}