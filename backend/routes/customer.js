const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const Customer = require('../models/customer')

module.exports = () => {
    //  Get All Customers 
    router.get('/customers/', (req, res, next) => {
        return Customer.find()
            .sort({'_id': -1})
            .then(items => res.status(200).json({ items }))
    })

    //  Get All Customers 
    router.get('/customers/:customerId', (req, res, next) => {
        return Customer.find()
            .sort({'_id': -1})
            .then(items => res.status(200).json({ items }))
    })
}