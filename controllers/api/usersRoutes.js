const { Users } = require('../../models');
const { friends } = require('../../models');
const { thoughts } = require('../../models');
const express = require('express');
const router = express.Router();


router.get('/', async (req, res) => {
    try {
        const allUsers = await Users.find().populate('friends').populate('thoughts');
        console.log('Populated Users:',allUsers);
        res.status(200).json(allUsers);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/:id', async (req, res) => {
    try {
        const userData = await Users.findById(req.params.id).populate('friends').populate('thoughts');
        res.status(200).json(userData);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.post('/', async (req, res) => {
    try {
        const { username, email } = req.body;
        const userData = await Users.create({ username, email });
        res.status(201).location(`/api/users/${userData._id}`).json(userData);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;
