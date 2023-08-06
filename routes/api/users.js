const express = require('express');
const router = express.Router();
const users = require('./user');

// GET all users
app.get('/api/users', async (req, res) => {
  const users = await User.find();
  res.json(users);
});

// GET a single user by its _id and populated thought and friend data
app.get('/api/users/:id', async (req, res) => {
  const user = await User.findById(req.params.id).populate('thoughts friends');
  if (!user) {
    return res.status(404).json({ error: 'User not found' });
  }
  res.json(user);
});

// POST a new user
app.post('/api/users', async (req, res) => {
  const { username, email } = req.body;
  const user = new User({ username, email });
  await user.save();
  res.json(user);
});

// PUT to update a user by its _id
app.put('/api/users/:id', async (req, res) => {
  const { username, email } = req.body;
  const user = await User.findByIdAndUpdate(
    req.params.id,
    { username, email },
    { new: true }
  );
  if (!user) {
    return res.status(404).json({ error: 'User not found' });
  }
  res.json(user);
});

// DELETE to remove a user by its _id
app.delete('/api/users/:id', async (req, res) => {
  const user = await User.findByIdAndDelete(req.params.id);
  if (!user) {
    return res.status(404).json({ error: 'User not found' });
  }
  // BONUS: Remove a user's associated thoughts when deleted
  await Thought.deleteMany({ _id: { $in: user.thoughts } });
  res.json({ message: 'User deleted successfully' });
});

// Endpoint to add a friend to a user's friend list
app.post('/api/users/:userId/friends/:friendId', (req, res) => {
  const userId = parseInt(req.params.userId);
  const friendId = parseInt(req.params.friendId);

  // Find the user and friend in the data store
  const user = users.find((u) => u.id === userId);
  const friend = users.find((u) => u.id === friendId);

  if (!user || !friend) {
    return res.status(404).json({ error: 'User or friend not found' });
  }

  // Check if the friend is already in the user's friend list
  if (user.friends.includes(friendId)) {
    return res.status(400).json({ error: 'Friend already added' });
  }

  // Add the friend to the user's friend list
  user.friends.push(friendId);

  res.json({ message: 'Friend added successfully' });
});

// Endpoint to add a friend to a user's friend list
app.post('/api/users/:userId/friends/:friendId', async (req, res) => {
  const userId = req.params.userId;
  const friendId = req.params.friendId;

  try {
    const user = await User.findByIdAndUpdate(
      userId,
      { $addToSet: { friends: friendId } },
      { new: true }
    ).populate('friends');

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    res.json(user);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

// Endpoint to remove a friend from a user's friend list
app.delete('/api/users/:userId/friends/:friendId', async (req, res) => {
  const userId = req.params.userId;
  const friendId = req.params.friendId;

  try {
    const user = await User.findByIdAndUpdate(
      userId,
      { $pull: { friends: friendId } },
      { new: true }
    ).populate('friends');

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    res.json(user);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;