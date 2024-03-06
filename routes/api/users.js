const router = require('express').Router();
const {
  getallUsers,
  getSingleUser,
  createUser,
  deleteUser,
  updateUser,
  friendspost
  
} = require('../../controllers/userController');

// api/users
router.route('/').get(getallUsers).post(createUser);

// api/users/:userId
router.route('/:userId').get(getSingleUser).delete(deleteUser).put(updateUser);

// api/users/:userId/friends/:friendsId
router.route('/:userId/friends/:friendId').post(friendspost);


module.exports = router;

