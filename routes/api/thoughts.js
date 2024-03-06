const router = require('express').Router();
const {
  getallThoughs,
  getSingleThough,
  createThought,
 deleteThought,
updateThought,
createReaction,
deleteReaction,
deleteAllThoughts,
} = require('../../controllers/thoughtsControllers');

// /api/thoughts
router.route('/').get(getallThoughs).post(createThought);

router.route('/many').delete(deleteAllThoughts)

//api/thoughts/:thoughtId
router.route('/:thoughtId').get(getSingleThough).delete(deleteThought).put(updateThought)

//api/thoughts/:thoughtId/reaction
router.route('/:thoughtId/reaction').post(createReaction);

//api/thoughts/:thoughtId/:reactionId
router.route('/:thoughtId/:reactionId').delete(deleteReaction);


module.exports = router;
