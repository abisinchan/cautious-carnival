const express = require('express');
const router = express.Router();
const {
  getAllThoughts,
  getThoughtById,
  createThought,
  updateThought,
  deleteThought,
  createReaction,
  deleteReaction,
} = require('./controllers/thoughtController');

// /api/thoughts
router.route('/thoughts').get(getAllThoughts).post(createThought);

// /api/thoughts/:id
router
  .route('/thoughts/:id')
  .get(getThoughtById)
  .put(updateThought)
  .delete(deleteThought);

// /api/thoughts/:thoughtId/reactions
router.route('/thoughts/:thoughtId/reactions').post(createReaction);

// /api/thoughts/:thoughtId/reactions/:reactionId
router.route('/thoughts/:thoughtId/reactions/:reactionId').delete(deleteReaction);

module.exports = router;
