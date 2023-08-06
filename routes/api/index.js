const router = require('express').Router();
const thoughtsRoute = require('./thoughts-route');
const userRoute = require('./users-route');

router.use('/api/thoughts', thoughtsRoute);
router.use('/api/user', userRoute);

module.exports = router;
