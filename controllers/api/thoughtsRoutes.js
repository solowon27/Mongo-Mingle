const express = require('express');
const router = express.Router();
const { thoughts }  = require('../../models');
const { Users } = require('../../models');

router.get('/', async (req, res) => {
    try {
        const allThoughts = await thoughts.find();
        res.status(200).json(allThoughts);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/:id', async (req, res) => {
    try {
        const thoughtData = await thoughts.findById(req.params.id);
        res.status(200).json(thoughtData);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.post('/', async (req, res) => {
    try {
      const { thoughtText, username } = req.body;
  
      const user = await Users.findOne({ username });
      if (!user) {
        return res.status(400).json({ message: 'User not found!' });
      }
  
      const thoughtData = await thoughts.create({ thoughtText, username });
      
  //Add thought object id to user's `thoughts` array field
      user.thoughts.push(thoughtData._id);
      await user.save();
  
      res.status(201).location(`/api/thoughts/${thoughtData._id}`).json(thoughtData);
    } catch (err) {
      res.status(500).json(err);
    }
  });

router.put('/:id', async (req, res) => {
    try {
        const { thoughtText, username } = req.body;
        const thoughtData = await thoughts.findByIdAndUpdate(req.params.id, { thoughtText, username });
        res.status(200).json(thoughtData);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const thoughtData = await thoughts.findByIdAndDelete(req.params.id);
        res.status(200).json(thoughtData);
    } catch (err) {
        res.status(500).json(err);
    }
});


module.exports = router;
