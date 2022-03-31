const mongoose = require('mongoose');
const { Schema } = require('mongoose');

const schema = new Schema({
    name: {
        type: 'string',
        required: true
    },
    age: {
        type: 'string',
        required: true
    },
    zip: {
        type: 'string',
        required: true
    },
    gender: {
        type: 'string',
        required: true
    },
    description: {
        type: 'string',
        required: true
    },
    type: {
        type: 'string',
        required: true
    },
    breed: {
        type: 'string',
        required: true
    },
    image: {
        type: 'string',
        required: true
    },
    ownerEmail: {
        type: 'string',
        required: true
    },
    ownerName: {
        type: 'string',
        required: true
    },
}, { timestamps: true } )

const profiles = mongoose.model('pet_profiles', schema);

module.exports = profiles;