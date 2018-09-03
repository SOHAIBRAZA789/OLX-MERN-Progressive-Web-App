const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');


const ads = require('./routes/api/ads');
const users = require('./routes/api/users');

const dbConnection = require('./db') // loads our connection to the mongo database

const app = express();

// BodyParser Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Static folder
//  app.use(express.static(path.join(__dirname, '../client/build')));
app.use(express.static(path.join(__dirname, '../client/public')));




   
  





// ** ROUTES ** //

// AD Routes

app.use('/api/ads',ads)
//User Routes
app.use('/api/users', users);

const port = process.env.PORT||5000;
app.listen(port,()=>console.log(`Server start on port ${port}`));
