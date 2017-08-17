var express = require('express');
var router = express.Router();
var User = require('../services/User.js');

/* GET users listing. */
router.get('/', function(req, res, next) {
    User.create({username:'guosen',password:'123'})
        .then(function (result) {
          console.log(result);
        })
});

module.exports = router;
