const express = require('express');
const user = require('../controllers/auth.controller');
var router = express.Router();

/* GET users listing. */
router.get('/', user.userCreate);

module.exports = router;
