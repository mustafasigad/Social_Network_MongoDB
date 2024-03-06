
![license](https://img.shields.io/badge/License-MIT-yellow.svg)
## Title
Social Network 
  
## Description 

Build and API for social media to allow users to share their thoughts react to comments and add friends 
## Table of Contents

1. [Description](#description) 
2. [Installation](#installation) 
3. [Usage](#usage) 
4. [License](#license)
5. [Contributing](#contribution)
6. [Testing](#testing)
7. [Questions](#questions) 

## Installation
git clone from https://github.com/mustafasigad/Social_Network_MongoDB , npm install and node index.js

## Usage 
Once the server is running, you can test the API routes using a tool like Insomnia or Postman.

##User Routes

    GET /api/users - Get all users
    GET /api/users/:userId - Get a single user by ID
    POST /api/users - Create a new user
     {
              "username": "lernantino",
              "email": "lernantino@gmail.com"
    }
    PUT /api/users/:userId - Update a user by ID
    DELETE /api/users/:userId - Delete a user by ID

####Thought Routes

    GET /api/thoughts - Get all thoughts
   
    GET /api/thoughts/:thoughtId - Get a single thought by ID
    POST /api/thoughts - Create a new thought
      {
        "thoughtText": "Here's a cool thought...",
        "username": "lernantino",
       
   }
    PUT /api/thoughts/:thoughtId - Update a thought by ID
    DELETE /api/thoughts/:thoughtId - Delete a thought by ID


##Reaction Routes

    POST /api/thoughts/:thoughtId/reaction - Create a reaction to a thought
    DELETE /api/thoughts/:thoughtId/reaction/:reactionId - Remove a reaction from a thought

##Friend Routes

    POST /api/users/:userId/friends/:friendId - Add a friend to a user's friend list
    DELETE /api/users/:userId/friends/:friendId - Remove a friend from a user's friend list

## License
License is under MIT license 

## Contribution
n/a

## Testing
n/a

## Questions

Git User link: https://github.com/mustafasigad  

Email: mus.sigad@gmail.com  

Video link : https://drive.google.com/file/d/1y3AtFPtHwkvIt6gGXJEoQCVQNuAk_a4e/view
 