const express = require('express');
const user = require('./users');
const auth = require('./auth');

const router = express.Router();
/* GET home page. */
router.use('/user', user);
router.use('/auth', auth);

module.exports = router;
