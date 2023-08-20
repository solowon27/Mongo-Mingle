const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  thoughts: [{ type: mongoose.Schema.Types.ObjectId, ref: 'thoughts' }],
  friends: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Users' }],
});

const Users = mongoose.model('Users', userSchema);

// Users.create([
//   { username: 'solomon22', email: 'solomon22@example.com', thoughts: [], friends: [], },
//   { username: 'jacob2', email: 'jacob2@example.com', thoughts: [], friends: [], },
//   { username: 'joseph2', email: 'josep2@test.com', thoughts: [], friends: [], },
// ])
//   .then(users => console.log('Created users:', users))
//   .catch(err => console.log('Error creating users:', err));

module.exports = Users;
