const mongoose = require('mongoose');

const thoughtSchema = new mongoose.Schema({
  thoughtText: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  username: { type: String, required: true },
  reactions: [{ type: mongoose.Schema.Types.ObjectId, ref: 'reactions' }],
});

const thoughts = mongoose.model('thoughts', thoughtSchema);

const reactionsSchema = new mongoose.Schema({
  reactionBody: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  username: { type: String, required: true },
});

// thoughts 
//   .create([
//     { thoughtText: 'I love the way the ocean smells', username: 'solomon22', reactions: [] },
//     { thoughtText: 'I love the way she observe people', username: 'jacob2', reactions: [] },
//     { thoughtText: 'I love the way she is so smart', username: 'joseph2', reactions: [] },
//   ])
//   .then(thoughts => console.log('Created thoughts:', thoughts))
//   .catch(err => console.log('Error creating thoughts:', err));



module.exports = thoughts;
