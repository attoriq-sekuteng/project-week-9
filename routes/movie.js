/**
 * @swagger
 * components:
 *   schemas:
 *     Movie:
 *       type: object
 *       required:
 *         - title
 *         - genres
 *         - year
 *       properties:
 *         id:
 *           type: integer
 *           description: The auto-generated id of the movie
 *         title:
 *           type: string
 *           description: The title of your movie
 *         genre:
 *           type: string
 *           description: The movie genre
 *         year:
 *           type: boolean
 *           description: Whether you have year watching the movie
 *         createdAt:
 *           type: string
 *           format: date
 *           description: The date the movie was added
 *       example:
 *         id: d5fE_asz
 *         title: Inception
 *         genre: Action
 *         
 */

/**
 * @swagger
 * tags:
 *   name: movies
 *   description: The movies managing API
 * /movies:
 *   post:
 *     summary: Create a new movie
 *     tags: [movies]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/movie'
 *     responses:
 *       200:
 *         description: The created movie.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/movie'
 *       500:
 *         description: Some server error
 *
 */
const express = require('express');
const MovieController = require('../controllers/movie');

const router = express.Router();

router.get('/', MovieController.getAllMovies);
router.get('/:id', MovieController.getMovieById);
router.post('/', MovieController.createMovie);
router.put('/:id', MovieController.updateMovie);
router.delete('/:id', MovieController.deleteMovie);

module.exports = router;
