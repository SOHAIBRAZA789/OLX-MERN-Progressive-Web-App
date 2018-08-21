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
   
   
   //**Ads Route**//
   app.get('/ads', function(req, res, next) {
    // res.send('respond with a resource');
     res.json([{
       id: 1,
       description: "3 Bhk Spacious Flat On Jhotwara Road With Lift N Parking",
       type: 'For Sale',
       sale: "Home",
       City:"Faisalabad",
       Price:"30,0000",
       Date:"21-AUG-2018"
     }, {
      id: 2,
      description: "Double bedroom flat, next to Lahari school, near",
      type: 'For Sale',
      sale: "Apartment",
      City:"Lahore",
      Price:"90,0000",
      Date:"1-SEP-2018"
     }]);
   });

// app.get('/',(req,res)=>{
//     res.send('Hello');
// });

const port = process.env.PORT||5000;
app.listen(port,()=>console.log(`Server start on port ${port}`));
