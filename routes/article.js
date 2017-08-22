var express = require('express');
var router = express.Router();
var Article = require('../controller/article.js');

/**
 * @swagger
 * definitions:
 *   Article:
 *     properties:
 *       title:
 *         type: string
 *       content:
 *         type: string
 */

/**
 * @swagger
 * /api/article:
 *   post:
 *     tags:
 *       - Articles
 *     description: article create
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: article
 *         description: article
 *         in:  body
 *         required: true
 *         type: string
 *         schema:
 *           $ref: '#/definitions/Article'
 *     responses:
 *       200:
 *         description: Successfully create
 */

router.post('/',Article.create);

/**
 * @swagger
 * /api/article:
 *   get:
 *     tags:
 *       - Articles
 *     description: get articles
 *     produces:
 *      - application/json
 *     parameters:
 *     - name: filter
 *       description: filter
 *       in:  query
 *       required: false
 *       type: string
 *     responses:
 *       200:
 *         description: Articles
 *         schema:
 *           type: array
 *           items:
 *             $ref: '#/definitions/Article'
 */

router.get('/',Article.find);

module.exports = router;
