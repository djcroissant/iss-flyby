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
    alert: {
        type: Schema.Types.ObjectId,
        ref: 'Alert'
    }
}, {
    timestamps: true
});

const UserModel = mongoose.model('UserModel', UserSchema)