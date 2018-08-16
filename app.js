const express = require('express'),
app = express(),
mongodb = require('mongodb'),
mongoose = require('mongoose'),
port = process.env.PORT || 3000,
myDB = 'mongodb://localhost/mongoDB',
user = require('./Models/users.model.js'),

mongoose.connect('myDB')

app.listen(port, (error)=>{
  if (!error) {
    console.log('listening on part:' port);
  } else {
    console.log(error);
  }
})
