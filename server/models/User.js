const mongoose = require('mongoose');

const Schema = mongoose.Schema;

let UserSchema = new Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    alerts: [{
        type: Schema.Types.ObjectId,
        ref: 'Alert'
    }]
}, {
    timestamps: true
});

module.exports = mongoose.model('UserModel', UserSchema)