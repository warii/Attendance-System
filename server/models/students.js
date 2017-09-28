const mongoose = require('mongoose');
const classes = require('./classes');
//import subjects from './subjects';
const attendance = require('./attendance');
const Schema = mongoose.Schema;
//Creates a model of the User which can be used to add users to the database.

// Create a schema
const StudentSchema = new Schema({
    //_id: { type: String },
    ID: { type: String, unique: true },
    firstname: { type: String },
    lastname: { type: String },
    password: { type: String, required: [true, 'Password is required.'] },
    classes: [classes.schema],
    attendance: [attendance.schema]
        //subjects: [subjects.schema]
});

// the schema is useless so far
// we need to create a model using it
var StudentModel = mongoose.model('Student', StudentSchema);

// make this available to our users in our Node applications
module.exports = StudentModel;