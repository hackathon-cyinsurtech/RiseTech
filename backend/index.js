const express = require('express')
const bodyParser = require('body-parser')
const faker = require('faker')
const mongoose = require('mongoose')
const expressValidator = require('express-validator');

const app = express()
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type,x-auth');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});


app.use(bodyParser.json())
app.use(expressValidator());

mongoose.connect('mongodb://bananash:bananash123@ds117178.mlab.com:17178/bananash')
mongoose.Promise = global.Promise;

//Get the default connection
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));


const quotation = require('./routes/quotation')
const customer = require('./routes/customer')
const company = require('./routes/company')
const chatfuel = require('./routes/chatfuel')

app.use(quotation)
app.use(customer)
app.use(company)
app.use(chatfuel)

app.listen(3000, () => console.log( 'Start Listening to 3000'))