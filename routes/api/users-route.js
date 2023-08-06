const express = require('express');
const router = express.Router();
const usersController = require('../controllers/usersController');

// /api/users
router.route('/api/users').get(usersController.getAllUsers).post(usersController.createUser);

// /api/users/:id
router
  .route('/api/users/:id')
  .get(usersController.getSingleUser)
  .put(usersController.updateUser)
  .delete(usersController.deleteUser);

// /api/users/:userId/friends/:friendId
router.route('/api/users/:userId/friends/:friendId').post(usersController.addFriend).delete(usersController.removeFriend);

module.exports = router;
