const express = require('express')
const bodyParser = require('body-parser')
const fs = require('fs')

var app = express()

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

var db = JSON.parse(fs.readFileSync('./db.json', 'utf8'))

//  Post Rates
app.post('/rates', function (req, res) {
  if (!req.body) return res.sendStatus(400)
  res.send(db)
})

app.get('/', function (req, res) {
    if (!req.body) return res.sendStatus(400)
    res.send('Test')
})
app.listen(3000, () => console.log( 'Start Listening to 3000'))