const express = require('express')
const bodyParser = require('body-parser')
const fs = require('fs')
const faker = require('faker')
const mongoose = require('mongoose')

const app = express()
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'https://congrats-people-tzio.c9users.io:8081')
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type,x-auth')
    res.setHeader('Access-Control-Allow-Credentials', true)
    if (req.method === "OPTIONS") 
      res.status(200).send()
    else 
      next()
})
app.use(bodyParser.json())

mongoose.connect('bananash:bananash123@ds117178.mlab.com:17178/bananash')
mongoose.Promise = global.Promise

//Get the default connection
var db = mongoose.connection;
var db = JSON.parse(fs.readFileSync('./db.json', 'utf8'))

const quotation = require('./routes/quotation')
const customer = require('./routes/customer')

app.use(quotation)
app.use(customer)

app.listen(3000, () => console.log( 'Start Listening to 3000'))