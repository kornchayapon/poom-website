let express = require('express')
let bodyParser = require('body-parser')
let cors = require('cors')

const {sequelize} = require('./models')

const config = require('./config/config')
const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(cors())

let port = process.env.PORT || config.port

require('./routes')(app)


app.get('/status', function (req, res) {
  res.send('Hello nodejs server')
})


sequelize.sync({force: false}).then( () => {
  app.listen(port, function () {
    console.log('server running on ' + port)
  })
})
