const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    userId: String,
    login: String,
    password: String,
});

const user = mongoose.model('user', userSchema);

module.exports = user;
