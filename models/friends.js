const mongoose = require('mongoose');

const friendSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'User' },
  friendId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'User' },

});

const friends = mongoose.model('friends', friendSchema);

module.exports = friends;
