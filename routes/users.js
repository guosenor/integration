var express = require('express');
var router = express.Router();
var User = require('../controller/user.js');


/* GET users listing. */
router.post('/',User.create);
/**
 * @swagger
 * definitions:
 *   User:
 *     properties:
 *       username:
 *         type: string
 *       password:
 *         type: string
 */

/**
 * @swagger
 * /api/user/login:
 *   post:
 *     tags:
 *       - Users
 *     description: user login with username and password
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: user
 *         description: User object
 *         in:  body
 *         required: true
 *         type: string
 *         schema:
 *           $ref: '#/definitions/User'
 *     responses:
 *       200:
 *         description: Successfully login
 */
router.post('/login',User.login);

/**
 * @swagger
 * /api/user/userInfo:
 *   get:
 *     tags:
 *       - Users
 *     description: Returns userInfo checkLogin
 *     produces:
 *      - application/json
 *     responses:
 *       200:
 *         description: users
 *         schema:
 *           type: object
 *           items:
 *             $ref: '#/definitions/User'
 */
router.get('/userInfo',User.findById);

module.exports = router;
