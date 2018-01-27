const mongoose = require('mongoose');

const customerSchema = mongoose.Schema({
    messengerUserId: {
        type: Number,
        index: true
    },
    chatfuelUserId: {
        type: Number,
        index: true
    },
    first_name: String,
    last_name: String,
    profile_picture_url: String,
    creationDate: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Customer', customerSchema);

