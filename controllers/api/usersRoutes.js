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

router.put('/:id', async (req, res) => {
    try {
        const { username, email } = req.body;
        const userData = await Users.findByIdAndUpdate(req.params.id, { username, email });
        res.status(200).json(userData);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const userData = await Users.findByIdAndDelete(req.params.id);
        res.status(200).json(userData);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/:id/friends', async (req, res) => {
    try {
        const userData = await Users.findById(req.params.id).populate('friends');
        res.status(200).json(userData.friends);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.post('/:id/friends/:friendId', async (req, res) => {
    try {
        const userData = await Users.findById(req.params.id);
        const friendData = await Users.findById(req.params.friendId);
        userData.friends.push(friendData._id);
        await userData.save();
        res.status(201).json(userData);
    } catch (err) {
        res.status(500).json(err);
    }

})

router.delete('/:id/friends/:friendId', async (req, res) => {
    try {
        const userData = await Users.findById(req.params.id);
        userData.friends.pull(req.params.friendId);
        await userData.save();  
        res.status(200).json(userData);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;
