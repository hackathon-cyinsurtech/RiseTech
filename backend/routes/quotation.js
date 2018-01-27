const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const Quotation = require('../models/quotation')

module.exports = () => {
    //  Get User's Quotations
    router.get('/quotations/:userid', (req, res, next) => {
        req.checkParams('userid', 'User ID must exists').optional()
        req.getValidationResult().then(result => {
            if (!result.isEmpty()) {
                return res.status(400).json({error: result.array()})
            }
            const userid = req.params.userid
            return Quotation.find(userid, '-comments')
                .sort({'_id': -1})
                .then(items => res.status(200).json({ items }))
        }).catch(err => next(err))
    })

    //  Get Quotation by ID
    router.get('/quotation/:quotationId', (req, res, next) => {
        req.checkParams('quotationId', 'Quotation ID must exists').optional()
        req.getValidationResult().then(result => {
            if (!result.isEmpty()) {
                return res.status(400).json({error: result.array()})
            }
            const quotationId = req.params.quotationId
            return Quotation.find(quotationId, '-comments')
                .then(quotation => res.status(200).json({ quotation }))
        }).catch(err => next(err))
    })

    //  Get All Quotations 
    router.get('/quotations/', (req, res, next) => {
        return Quotation.find()
            .sort({'_id': -1})
            .then(items => res.status(200).json({ items }))
    })
}