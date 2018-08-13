const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

//const dbConnection = require('./db') // loads our connection to the mongo database
const app = express();

// BodyParser Middleware
app.use(bodyParser.json());

app.get('/users', function(req, res, next) {
    // res.send('respond with a resource');
     res.json([{
       id: 1,
       name: "Hiccup",
       password: 'hiccup'
     }, {
       id: 2,
       name: "King Arthur",
       password: 'king-arthur'
     }]);
   });

// app.get('/',(req,res)=>{
//     res.send('Hello');
// });

const port = process.env.PORT||5000;
app.listen(port,()=>console.log(`Server start on port ${port}`));
