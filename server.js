const express = require('express'); //import express

const routes = require('./controllers'); //import the routes from the controllers folder
const db = require('./config/connection'); //import the connection to the database

const PORT = process.env.PORT || 3001; //set the port to 3001
const app = express(); //initialize the express app

//middleware to parse incoming JSON data
app.use(express.urlencoded({ extended: true })); 
app.use(express.json()); 

app.use(routes); //use the routes from the controllers folder

//connect to the database and then start the server
db.once('open', () => {
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`);
    });
  });
  