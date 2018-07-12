const mongoose = require('mongoose');

const Schema = mongoose.Schema;

let LocationSchema = new Schema({
    location: {
        type: String,
        required: true,
        max: 255
    },
    latitude: {
        type: Number,
        min: 0,
        max: 90,
        required: true
    },
    longitude: {
        type: Number,
        min: -180,
        max: 180,
        required: true
    }
});

module.exports = mongoose.model('LocationModel', LocationSchema)