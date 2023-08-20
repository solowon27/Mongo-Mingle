const express = require('express');
const router = express.Router();

const thoughtsRoutes = require('./thoughtsRoutes');
// const friendsRoutes = require('./friendsRoutes');
const usersRoutes = require('./usersRoutes');

router.use('/thoughts', thoughtsRoutes);
// router.use('/friends', friendsRoutes);
router.use('/users', usersRoutes);

module.exports = router;
