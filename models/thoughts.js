const mongoose = require('mongoose');

const reactionsSchema = new mongoose.Schema({
  reactionBody: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  username: { type: String, required: true },
});

const thoughtSchema = new mongoose.Schema({
  thoughtText: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  username: { type: String, required: true },
  reactions: [{ type: mongoose.Schema.Types.ObjectId, ref: 'reactions' }],
});

thoughtSchema.virtual('reactionCount').get(function () {
  return this.reactions.length;
});

const thoughts = mongoose.model('thoughts', thoughtSchema);

module.exports = thoughts;
