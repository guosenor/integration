var express = require('express');
var router = express.Router();
var User =require('./users');
var Article =require('./article');

/* GET home page. */
router.use('/user',User);
router.use('/article',Article);
module.exports = router;
