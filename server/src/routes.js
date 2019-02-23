const UserController = require('./controllers/UserController')

module.exports = (app) => {
  // user section
  // create
  app.post('/user',
    UserController.create
  )

  // update user
  app.put('/user/:userId', 
    UserController.put
  )

  // delete user
  app.delete('/user/:userId', 
    UserController.remove
  )

  // view all user
  app.get('/users', 
    UserController.index
  )

  // view user
  app.get('/user/:userId', 
    UserController.show
  )
}