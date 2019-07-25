'use strict';
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: {
        first_name: String,
        last_name: String
    },
    email: String,
    password: String
});

const UserModel = mongoose.model('user', UserSchema);

module.exports = UserModel;
