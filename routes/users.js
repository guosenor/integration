var express = require('express');
var router = express.Router();
var User = require('../controller/user.js');

/* GET users listing. */
router.post('/',User.create);

module.exports = router;
