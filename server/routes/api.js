//Contains all the api calls we plan on using on our Routes.

// Imports all the required dependencies
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Student = require('../models/students');
const Attendance = require('../models/attendance');
mongoose.Promise = global.Promise;


/**function getNextSequenceValue(sequenceName) {
    return new Promise(function(resolve, reject) {
        var sequenceDocument = Counters.findByIdAndUpdate(
            sequenceName, { $inc: { sequence_value: 1 } }, { upsert: true, new: true },
            function(err, result) {
                if (err) {
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
/**router.get('/', (req, res) => {
    var seq = getNextSequenceValue("userId").then(function(seq) {
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
                res.send({ 'status': 'Error' });
            } else {
                res.send({ 'status': 'Success', 'user': newUser });
            }
        });
    });
});
//Get request running on the /get-users path
router.get('/students', (req, res, next) => {
    // get all the users
    Student.findOne({ "ID": req.query.ID, "password": req.query.password }, function(err, student) {
        if (err) {
            res.send({ 'status': 'failed' });
        } else {
            // Responds with an object of all the users
            res.send(student);
        }
    });
});**/

/**router.get('/login', (req, res, next) => {
    try {
        Student.findOne({ "ID": req.student.ID, "password": req.student.password }, function(student) {
                res.send(student);
            }
        }
        catch (err) {
            next(err);
        }
    });
});**/

//
//router.get('/student', (req, res, next) => {

//})

//student -> class -> create new attendance true/false
//haven't tested if it works yet
router.post('/students/:id/classes/:id/attendance', (req, res) => {
    Student.Attendance.create(req.body);
    res.send({
        attendance: req.body.attendance
    });
});

//post a student
router.post('/students', (req, res) => {
    Student.create(req.body).then(function(student) {
        res.send(student);
    });
});

//pull first student -> it works
router.get('/students', (req, res) => {
    Student.findOne({}).then(function(student) {
        res.send(student);
    });
});

//pull one based off password -> doesn't work yet :(
router.get('/students', (req, res) => {
    Student.findOne({ "password": req.query.password }).then(function(err, student) {
        if (err) {
            res.send("rip");
        } else {
            res.json(student);
        }
    });
});
module.exports = router;