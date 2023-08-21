const express = require('express');
const router = express.Router();
const { thoughts }  = require('../../models');
const { Users } = require('../../models');

//get all thoughts
router.get('/', async (req, res) => {
    try {
        const allThoughts = await thoughts.find(); //find all thoughts and store in allThoughts
        res.status(200).json(allThoughts);
    } catch (err) { //if there is an error, return the error
        res.status(500).json(err);
    }
});

//get one thought by id
router.get('/:id', async (req, res) => {
    try {
        const thoughtData = await thoughts.findById(req.params.id); //find one thought by id and store in thoughtData
        res.status(200).json(thoughtData, reactionCount); //return the thoughtData
    } catch (err) {
        res.status(500).json(err);
    }
});

//create a new thought
router.post('/', async (req, res) => {
    try {
      const { thoughtText, username } = req.body; // destructure the necessary data from the request body
  
      const user = await Users.findOne({ username }); // find the user based on the provided username
      if (!user) {
        return res.status(400).json({ message: 'User not found!' });
      }
  
      const thoughtData = await thoughts.create({ thoughtText, username });

  //Add thought object id to user's `thoughts` array field
      user.thoughts.push(thoughtData._id);
      await user.save();// Save the updated user with the added thought reference
  
      res.status(201).location(`/api/thoughts/${thoughtData._id}`).json(thoughtData);
    } catch (err) {
      res.status(500).json(err);
    }
  });

  //update a thought by id
router.put('/:id', async (req, res) => { 
    try {
        const { thoughtText, username } = req.body; 
        const thoughtData = await thoughts.findByIdAndUpdate(req.params.id, { thoughtText, username }); //find one thought by id and update it
        res.status(200).json(thoughtData); //return the updated thought
    } catch (err) {
        res.status(500).json(err);
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const thoughtData = await thoughts.findByIdAndDelete(req.params.id); //find one thought by id and delete it
        res.status(200).json(thoughtData);
    } catch (err) {
        res.status(500).json(err);
    }
});

//get reactions for a thought by id
router.get('/:id/reactions', async (req, res) => {
    try {
      const thoughtData = await Thought.findById(req.params.id);
      const reactionCount = thoughtData.reactionCount; // Access the virtual field
  
      res.status(200).json({ reactionCount }); // Return the count
    } catch (err) {
      res.status(500).json(err);
    }
  });

  //add a reaction to a thought
router.post('/:id/reactions', async (req, res) => {
    try {
        const { reactionBody, username } = req.body; //destructure the necessary data from the request body
        const thoughtData = await thoughts.findById(req.params.id); //find one thought by id
        thoughtData.reactions.push({ reactionBody, username }); //add the reaction to the thought
        await thoughtData.save(); //save the updated thought
        res.status(201).json(thoughtData); //return the updated thought
    } catch (err) {
        res.status(500).json(err);
    }
});

//delete a reaction from a thought
router.delete('/:id/reactions/:reactionId', async (req, res) => {
    try {
        const thoughtData = await thoughts.findById(req.params.id);
        thoughtData.reactions.pull(req.params.reactionId);
        await thoughtData.save();
        res.status(200).json(thoughtData);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;
