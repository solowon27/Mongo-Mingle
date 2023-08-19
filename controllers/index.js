const router = require('express').Router();

const apiRoutes = require('./api');
const usersRoutes = require('./usersRoutes');

router.use('/users', usersRoutes);
router.use('/api', apiRoutes);

module.exports = router;