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
  reactions: [reactionsSchema],
},
{ // Tell the schema that it can use virtuals
  toJSON: {
    virtuals: true,
  },
  id: false,
}
);

//create a virtual called reactionCount that retrieves the length of the thought's reactions array field on query
thoughtSchema.virtual('reactionCount').get(function () {
  return this.reactions.length;
});

const thoughts = mongoose.model('thoughts', thoughtSchema);

module.exports = thoughts;
