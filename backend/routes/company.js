const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const Company = require('../models/company')

module.exports = () => {
    //  Get All Companies 
    router.get('/companies/', (req, res, next) => {
        return Companies.find()
            .sort({'_id': -1})
            .then(items => res.status(200).json({ items }))
    })

    //  Get Company
    router.get('/companies/:companyId', (req, res, next) => {
        return Companies.find()
            .sort({'_id': -1})
            .then(items => res.status(200).json({ items }))
    })
}