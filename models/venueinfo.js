const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const joi = require('joi')


const venueInfo = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

mongoose.model('users', venueInfo);