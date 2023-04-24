const express = require('express');
const bodyparser = require('body-parser');
const sequelize = require('./util/database');
const User = require('./models/user');
const app = express();

// we can use this app.use() to use body-parser for all routes
// this will parse the body of the request and convert it to json
app.use(bodyparser.json()); 
app.use(bodyparser.urlencoded({extended: false})); // this will parse the url encoded data , here we are using extended: false beacuse we are not using nested objects(link arrays).

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*'); // this will allow all domains to access our api, where setheader is a method os response object . '*' means all domains
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE') // this will allow all methods to access our api & use it to perform crud operations on our database
    next(); // this will allow the request to continue to the next middleware in line

})

// test routes
app.get('/', (req, res, next) => {
    res.send('Hello from express and crud application');
});
  


// CRUD routes
app.use('/users', require('./routes/users')); // we are importing the routes from users.js file in routes folder to use it here

// Error handling
app.use((error, req, res, next) => {
    console.log(error);
    const status = error.statusCode || 500;
    const message = error.message;
    res.status(status).json({ message: message });
  });

// sync database
// we will sequelize.sync() to sync our databse with our models.
sequelize
  .sync()
  .then(result => {
    console.log("Database connected");
    app.listen(3000);
  })
  .catch(err => console.log(err));