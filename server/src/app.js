let express = require('express')
let bodyParser = require('body-parser')

const {sequelize} = require('./models')

const config = require('./config/config')
const app = express()

let port = process.env.PORT || config.port

require('./routes')(app)

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.get('/status', function (req, res) {
  res.send('Hello nodejs server')
})


sequelize.sync({force: false}).then( () => {
  app.listen(port, function () {
    console.log('server running on ' + port)
  })
})










