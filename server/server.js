const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const dbConnection = require('./db') // loads our connection to the mongo database
const app = express();

// BodyParser Middleware
app.use(bodyParser.json());


const port = process.env.PORT||5000;
app.listen(port,()=>console.log(`Server start on port ${port}`));