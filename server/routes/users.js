const express = require('express');
const user = require('../controllers/user.controller');
var router = express.Router();

/* GET users listing. */
router.route('/')
    .get(user.userCreate)
    .post(user.userCreate)


module.exports = router;
