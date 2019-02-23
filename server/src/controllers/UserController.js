const {User} = require('../models')

module.exports = {
  // get all
  async index (req, res) {
    try {
      const users = await User.findAll()
      res.send(users)
    } catch (error) {
      res.status(500).send({
        error: 'The user information was incorrect'
      })
    }
  },

  // create
  async create (req, res) {
    console.log('blog:' + req.body)

    try {
      const user = await User.create(req.body)
      res.send(user.toJSON())
    } catch (error) {
      res.status(500).send({
        error: 'The user information was incorrect'
      })
    }
  },

  // update
  async put (req, res) {
    try {
      await User.update(req.body, {
        where: {
          id: req.params.userId
        }
      })
      res.send(req.body)
    } catch (err) {
      res.status(500).send({
        error: 'The user information was incorrect'
      })
    }
  },

  // delete
  async remove (req, res) {
    try {
      const user = await User.findOne({
        where: {
          id: req.params.userId
        }
      })
  
      if(!user) {
        return res.status(403).send({
          error: 'The user information was incorrect'
        })
      }
  
      await user.destroy()
      res.send(user)
    } catch (error) {
      res.status(500).send({
        error: 'The user information was incorrect'
      })
    }
  },

  // get by id
  async show (req, res) {
    try {
      const user = await User.findById(req.params.userId)
      res.send(user)
    } catch (error) {
      res.status(500).send({
        error: 'The user information was incorrect'
      }) 
    }
  }
}