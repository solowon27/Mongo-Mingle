const mongoose = require('mongoose');
const User = require('../models/Users'); 
const Thought = require('../models/thoughts'); 

// Seed Users
const usersData = [
  { username: 'solomon22', email: 'solomon22@example.com' },
  { username: 'jacob2', email: 'jacob2@example.com' },
  { username: 'joseph2', email: 'josep2@test.com' },
];

User.create(usersData, {  bufferTimeoutMS: 30000 })
  .then(async users => {
    console.log('Created users:', users);

    // Seed Thoughts
    const thoughtsData = [
      { thoughtText: 'global warm is unpredictable', username: 'solomon22' },
      { thoughtText: 'I love winter', username: 'jacob2' },
      { thoughtText: 'we need a new social media platform', username: 'joseph2' }
    ];

    const createdThoughts = await Thought.create(thoughtsData);

    // Associate thoughts with users
    for (const thought of createdThoughts) {
      const user = users.find(u => u.username === thought.username);
      if (user) {
        user.thoughts.push(thought._id);
        await user.save();
      }
    }

    console.log('Created thoughts:', createdThoughts);
  })
  .catch(err => console.log('Error creating users:', err));

