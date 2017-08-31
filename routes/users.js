var express = require('express');
var router = express.Router();
var User = require('../controller/user.js');

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
 * /api/user:
 *   post:
 *     tags:
 *       - Users
 *     description: register user
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
/* GET users listing. */
router.post('/',User.create);


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
 * /api/user:
 *   get:
 *     tags:
 *       - Users
 *     description: get User list for admin
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: filter
 *         description: filter object
 *         in:  query
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: userList
 */
router.get('/',User.find);
/**
 * @swagger
 * /api/user/setRole:
 *   get:
 *     tags:
 *       - Users
 *     description: user set role
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: userId
 *         description: UserId
 *         in:  query
 *         required: true
 *         type: string
 *       - name: roleId
 *         description: roleId
 *         in:  query
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: Successfully setRole
 */
router.get('/setRole',User.setRole);
/**
 * @swagger
 * /api/user/removeRole:
 *   get:
 *     tags:
 *       - Users
 *     description: user remove role
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: userId
 *         description: UserId
 *         in:  query
 *         required: true
 *         type: string
 *       - name: roleId
 *         description: roleId
 *         in:  query
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: Successfully removeRole
 */
router.get('/removeRole',User.removeRole);

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
