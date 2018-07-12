const mongoose = require('mongoose');

const Schema = mongoose.Schema;

let UserSchema = new Schema({
    email: {
        type: String,
        required: true,
        max: 100
    },
    password: {
        type: String,
        required: true,
        max: 100
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('UserModel', UserSchema)