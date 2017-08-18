var express = require('express');
var router = express.Router();
var User =require('./users');

/* GET home page. */
router.use('/user',User);

module.exports = router;
