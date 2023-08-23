const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  thoughts: [{ type: mongoose.Schema.Types.ObjectId, ref: 'thoughts' }],
  friends: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Users' }],
},
{ // Tell the schema that it can use virtuals
  toJSON: {
    virtuals: true,
  },
  id: false,
  });

const Users = mongoose.model('Users', userSchema);

module.exports = Users;
