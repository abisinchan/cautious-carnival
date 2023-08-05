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