const mongoose = require('mongoose');

const companySchema = mongoose.Schema({
    Id: {
        type: Number,
        index: true
    },
    name: String,
    address: String,
    phone: String,
    fax: String,
    email: String,
    creationDate: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Company', companySchema);

