const mongoose = require('mongoose');

const Schema = mongoose.Schema;

let AlertSchema = new Schema({
    startTime: {
        type: Date,
        required: true
    },
    endTime: {
        type: Date,
        required: true
    },
    active: {
        type: Boolean,
        default: true
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    location: {
        type: Schema.Types.ObjectId,
        ref: 'Location'
    }
}, {
    timestamps: true
});

const AlertModel = mongoose.model('AlertModel', AlertSchema)