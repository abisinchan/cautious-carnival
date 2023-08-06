const express = require('express');
const router = express.Router();
const usersController = require('../../controllers/usersController');

// /api/users
router.route('/').get(usersController.getAllUsers).post(usersController.createUser);

// /api/users/:id
router
  .route('/:id')
  .get(usersController.getSingleUser)
  .put(usersController.updateUser)
  .delete(usersController.deleteUser);

// /api/users/:userId/friends/:friendId

router.route('/:userId/friends/:friendId').post(usersController.addFriend).delete(usersController.removeFriend);
module.exports = router;
