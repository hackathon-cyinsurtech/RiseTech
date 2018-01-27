const mongoose = require('mongoose');

const quotationSchema = mongoose.Schema({
    chatfuelUserId: {
        type: Number,
        index: true
    },
    creationDate: {
        type: Date,
        default: Date.now
    },
    category: String,
    sub_category: String,
    description: String,
    value: Number,
    start_date: Date,
    end_date: Date,
    photo: String
});

module.exports = mongoose.model('Quotation', quotationSchema);

