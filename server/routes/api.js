//Contains all the api calls we plan on using on our Routes.

// Imports all the required dependencies
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const User = require('../models/user');
const Counters = require('../models/counters');

function getNextSequenceValue(sequenceName) {
  return new Promise(function(resolve, reject) {
    var sequenceDocument = Counters.findByIdAndUpdate (
      sequenceName,
      {$inc:{sequence_value:1}},
      {upsert:true, new:true},
      function(err, result) {
        if(err) {
          console.log("error");
          reject(Error("shit's broken"));
        } else {
          console.log("hello");
          console.log(result);
          resolve(result.sequence_value);
        }
      }
    );
  });
}

/* GET api listing. */
// Get request running on the / path.
router.get('/', (req, res) => {
  var seq = getNextSequenceValue("userId").then(function(seq){
    var newUser = User({
      _id: seq,
      ID: "1234",
      firstname: "houwaryy",
      lastname: "rangkuty",
      password: "test",
    });

    // Saves the user into the database.
    newUser.save(function(err) {
      if (err) {
        res.send({'status':'Error'});
      } else {
        res.send({'status':'Success', 'user': newUser});
      }
    });
  });
});
//Get request running on the /get-users path
router.get('/get-users', (req, res) => {
  // get all the users
User.findOne({ "ID": req.query.ID, "password": req.query.password }, function(err, user) {
  if (err) {
    res.send({'status': 'failed'});
  } else {
    // Responds with an object of all the users
    res.send(user);
  }    
});
});
module.exports = router;