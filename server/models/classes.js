const mongoose = require('mongoose');
const Subjects = require('./subjects');
const Schema = mongoose.Schema;

const ClassSchema = new Schema({
    subject: [Subjects.schema],
    day: { type: String },
    time: { type: String },
    duration: { type: String },
    location: { type: String }
});

var ClassModel = mongoose.model('Class', ClassSchema);

module.exports = ClassModel