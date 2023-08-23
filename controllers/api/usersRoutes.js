const { Users } = require('../../models');
const { thoughts } = require('../../models');
const express = require('express');
const router = express.Router();

//get all users
router.get('/', async (req, res) => {
    try {

//find all users and store in allUsers and populate friends and thoughts
        const allUsers = await Users.find().populate('friends').populate('thoughts'); 
        // console.log('Populated Users:',allUsers);
        res.status(200).json(allUsers);
    } catch (err) {
        res.status(500).json(err);
    }
});

//get one user by id
router.get('/:id', async (req, res) => {
    try {
        const userData = await Users.findById(req.params.id).populate('friends').populate('thoughts');
        res.status(200).json(userData, friendCount);
    } catch (err) {
        res.status(500).json(err);
    }
});

//create a new user
router.post('/', async (req, res) => {
    try {
        const { username, email } = req.body; // destructure the necessary data from the request body
        const userData = await Users.create({ username, email }); //create a new user
        res.status(201).location(`/api/users/${userData._id}`).json(userData); //return the new user object
    } catch (err) {
        res.status(500).json(err);
    }
});

//update a user by id
router.put('/:id', async (req, res) => {
    try {
        const { username, email } = req.body;
        //find one user by id and update it
        const userData = await Users.findByIdAndUpdate(req.params.id, { username, email }); 
        res.status(200).json(userData);
    } catch (err) {
        res.status(500).json(err);
    }
});

//delete a user by id
router.delete('/:id', async (req, res) => {
    try {
        //find one user by id and delete it
        const userData = await Users.findByIdAndDelete(req.params.id);
        res.status(200).json(userData);
    } catch (err) {
        res.status(500).json(err);
    }
});

//get all friends for a user using the user's id
router.get('/:id/friends', async (req, res) => {
    try {
        const userData = await Users.findById(req.params.id).populate('friends');
        res.status(200).json(userData.friends);
    } catch (err) {
        res.status(500).json(err);
    }
});

//create a new friend for a user using the user's id
router.post('/:id/friends/:friendId', async (req, res) => {
    try {
        const userData = await Users.findById(req.params.id); //find the user by id
        const friendData = await Users.findById(req.params.friendId); //find the friend by id
        userData.friends.push(friendData._id); //add the friend to the user's friends array
        await userData.save(); //save the updated user
        res.status(201).json(userData); //return the updated user
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
