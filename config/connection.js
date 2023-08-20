const mongoose = require('mongoose');

//connect to the mongoMingleDB database on the MongoDB server running on localhost:27017
mongoose.connect('mongodb://127.0.0.1:27017/mongoMingleDB'); 

//export the connection
module.exports = mongoose.connection;
