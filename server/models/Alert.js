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
    location: {
        type: Schema.Types.ObjectId,
        ref: 'Location'
    }
}, {
    timestamps: true
});

AlertSchema.methods.getUserAlerts = function(_id) {
    Alert.find({'owner': _id}).then((alerts) => {
        return alerts;
    });
}

const AlertModel = mongoose.model('AlertModel', AlertSchema)