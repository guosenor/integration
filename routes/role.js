/**
 * Created by guosen on 2017/8/24.
 */
var express = require('express');
var router = express.Router();
var Role = require('../controller/role.js');

/**
 * @swagger
 * definitions:
 *   Role:
 *     properties:
 *       name:
 *         type: string
 *       description:
 *         type: string
 */

/**
 * @swagger
 * /api/role:
 *   post:
 *     tags:
 *       - Roles
 *     description: create Role
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: role
 *         description: Role object
 *         in:  body
 *         required: true
 *         type: string
 *         schema:
 *           $ref: '#/definitions/Role'
 *     responses:
 *       200:
 *         description: Successfully create
 */

router.post('/',Role.create);

/**
 * @swagger
 * /api/role/modify:
 *   post:
 *     tags:
 *       - Roles
 *     description: modify one role
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: role
 *         description: Role object
 *         in:  body
 *         required: true
 *         type: string
 *         schema:
 *           $ref: '#/definitions/Role'
 *     responses:
 *       200:
 *         description: Successfully modify
 */

router.post('/modify',Role.modify);

/**
 * @swagger
 * /api/role/:id:
 *   delete:
 *     tags:
 *       - Roles
 *     description: delete one role by id
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: role
 *         description: Role id
 *         in:  params
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: Successfully modify
 */

router.delete('/:id',Role.deleteById);

module.exports = router;