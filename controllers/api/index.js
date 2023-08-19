const router = require('express').Router();

const thoughtsRoutes = require('./thoughtsRoutes');
const friendsRoutes = require('./friendsRoutes');

router.use('/thoughts', thoughtsRoutes);
router.use('/friends', friendsRoutes);

module.exports = router;
