const mongoose = require('mongoose');
const Classes = require('./classes');

const Schema = mongoose.Schema;

const AttendanceSchema = new Schema({
    //classes: [Classes.schema],
    //counters: { type: Integer },
    classDate: { type: Date },
    attendance: { type: Boolean }
});


var AttendanceModel = mongoose.model('Attendance', AttendanceSchema);

module.exports = AttendanceModel;