const express = require('express');
const user = require('../controllers/auth.controller');
var router = express.Router();

/* GET users listing. */
router.route('/')
    .post(user.userLogin)


module.exports = router;
