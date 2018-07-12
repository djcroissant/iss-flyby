const mongoose = require('mongoose');

const Schema = mongoose.Schema;

let AlertSchema = new Schema({
    startTime: {
        type: String,
        max: 11,
        required: true
    },
    endTime: {
        type: String,
        max: 11,
        required: true
    },
    active: {
        type: Boolean,
        default: true
    },
    owner: {
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

AlertSchema.methods.addOwner = function(owner_id) {
    this.owner = owner_id;
    return this.save();
}

AlertSchema.methods.getUserAlerts = function(_id) {
    Alert.find({'owner': _id}).then((alerts) => {
        return alerts;
    });
}

module.exports = mongoose.model('AlertModel', AlertSchema);