var express = require('express');
var router = express.Router();
var User =require('./users');
var Article =require('./article');
var Role = require('./role');

/* GET home page. */
router.use('/user',User);
router.use('/article',Article);
router.use('/role',Role);

module.exports = router;
