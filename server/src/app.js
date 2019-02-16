let express = require('express')

const app = express()

let port = 8080

app.get('/status', function (req, res) {
  res.send('Hello nodejs server')
})

// user section
// create
app.post('/user', function (req, res) {
  res.send('OK I created user')
})

// update user
app.put('/user/:userId', function (req, res) {
  res.send('OK I updated user')
})

// delete user
app.delete('/user/:userId', function (req, res) {
  res.send('OK I deleted user')
})

// view all user
app.get('/users', function (req, res) {
  res.send('get all user')
})

// view user
app.get('/user/:userId', function (req, res) {
  res.send('get user by id')
})


app.listen(port, function () {
  console.log('server running on ' + port)
})