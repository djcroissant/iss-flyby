const mongoose = require('mongoose');

const Schema = mongoose.Schema;

let LocationSchema = new Schema({
    location: {
        type: String,
        required: true
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

const LocationModel = mongoose.model('LocationModel', LocationSchema)