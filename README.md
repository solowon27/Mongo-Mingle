# Mongo-Mingle

# description 

Mongo Mingle is a web application that allows users to share their thoughts and reactions with each other. It provides an API for managing users, thoughts, and reactions using MongoDB and Express.js.

## Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
- [API Endpoints](#api-endpoints)
- [Usage](#usage)
- [Links](#links)
- [Screenshoots](#screenshoots)
- [Contributing](#contributing)
- [License](#license)
- [contact](#contact)

## Features

- Create, read, update, and delete users with associated thoughts and friends.
- Create, read, and delete thoughts with reactions.
- Connect with friends and view their thoughts.
- Comprehensive API for easy interaction with the application.
- MongoDB integration for data storage.

## Getting Started

1. Clone the repository to your local machine:

   ```git clone git@github.com:solowon27/Mongo-Mingle.git```

then install the neccessary dependancies


```npm install```

and to start the application you can type ```npm start``` on your terminal

then open your browser and navigate to http://localhost:3001 to access the API

# API Endpoints
```
GET /api/users:   Retrieve all users
GET /api/users/:id    Retrieve user details by ```_id```.
POST /api/users:   Create a new user.
PUT /api/users:id    to update a user by its ```_id```
DELETE /api/users/:id    to remove user by its ```_id```
GET /api/thoughts:   Retrieve all thoughts
GET /api/thoughts/:id:   Retrieve thought details by ID.
POST /api/thoughts:   Create a new thought.
POST /api/thoughts/:thoughtId/reactions:   Create a new reaction for a thought.
DELETE /api/thoughts/:thoughtId/reactions/:reactionId:   Remove a reaction from a thought.
POST /api/users/:userId/friends/:friendId:    to add a new friend to a user's friend list
DELETE /api/users/:userId/friends/:friendId:   to remove a friend from a user's friend list  

```
# Usage

Use tools like Insomnia or Postman to interact with the API endpoints. Detailed request and response examples can be found in the API Endpoints section above.

# Links

1. video demo link []

# Screenshoots

![get all user](/Assets/get%20all%20users.jpg)
![create new user](/Assets/create%20a%20new%20user.jpg).
![get all thoughts](/Assets/get%20all%20thoughts.jpg)
![create reactions](/Assets/create%20a%20reaction%20using%20thought%20id.jpg)
![create friends](/Assets/delet%20a%20new%20friend%20using%20friend%20id.jpg)

```NOTICE: YOU CAN FOUND ALL REQUEST TESTS INSIDE ASSET FOLDERS, THE ABOVE SCREEN SHOOTS ARE FOR THE DEMO ```

# Contributing
Contributions are welcome! If you find any issues or improvements, feel free to open a pull request.

1. Fork the repository.
2. Create a new branch: git checkout -b feature/your-feature-name,
3. Commit your changes: git commit -m 'Add some feature',
4 . Push to the branch: git push origin feature/your-feature-name,
5. Open a pull request.

# License
This project is licensed under the MIT License.

# Contact 

For inquiries, suggestions, or feedback, please reach out here [solowon27@hotmail.com] or [https://www.linkedin.com/in/solomon-tegegne-7b347027a/]. Thank you




