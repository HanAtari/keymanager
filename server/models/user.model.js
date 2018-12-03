const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    login: String,
    password: String,
    email: String,
});

const user = mongoose.model('user', userSchema);

module.exports = user;
