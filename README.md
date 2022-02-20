# README

Test for Zemoga


# Content

 - API for update and read data users of portfolio 
 - Web for view the user's profile and Twitter timeline



## Demo
[Frontend](https://zemoga-node-test.herokuapp.com/)

## Requirements

  - Node.js v16 or higher
  - npm
  - Aws-sdk
  - Sequelize v6
  - Twitter-node-client
  - Express
  - Express handlebars
  - Body-parser
  - Bootstrap
  - MySQL

## Installation
To install proyect just type in the console and execute

    npm install

## Run app
To run proyect just type in the console and execute

    npm start
Or  
    
    npm run dev

## Technologies used

 - [ ] API
 Two end points developed in Node.js using Express that connects to DynamoDB AWS throught to aws-sdk

> /api/portfolio/update/
> /api/portfolio/find/

The first is for UPDATE data from a user of portfolio and the second is just for get the data from a user.

**Read the API Docs in the frontend for more details** 

 - [ ] Frontend
Developed in Node.js using Express for backend and Express-Handlebars like template engine, it connects to Zemoga MySQL database and gets the data from portfolioDB Data Base and portfolio table the app shows the user's profile and connect to Twitter API using twitter-node-client in order to obtain the last five user's timeline.

## Develop time

50 hours approximately
