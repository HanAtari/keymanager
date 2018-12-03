const express = require('express');
const user = require('./users');

const router = express.Router();
/* GET home page. */
router.use('/auth', user);

module.exports = router;
