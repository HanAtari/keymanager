const express = require('express');
const user = require('../controllers/user.controller');
const accessCode = require('../controllers/accessCode.controller');
var router = express.Router();

/* GET users listing. */
router.route('/')
    .post(user.userCreate)

module.exports = router;
