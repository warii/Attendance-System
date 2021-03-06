const mongoose = require('mongoose');
//import Version from './version';
const Schema = mongoose.Schema;
//Creates a model of the User which can be used to add users to the database.

// Create a schema
const StaffSchema = new Schema({
    _id: { type: String },
    ID: { type: String, unique: true },
    firstname: { type: String, unique: [true, 'Password is required.'] },
    lastname: { type: String },
    password: { type: String },
});

// the schema is useless so far
// we need to create a model using it
var StaffModel = mongoose.model('Staff', StaffSchema);

// make this available to our users in our Node applications
module.exports = StaffModel;