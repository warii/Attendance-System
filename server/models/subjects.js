const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const SubjectSchema = new Schema({
    id: { type: String },
    name: { type: String }
});

const SubjectModel = mongoose.model('Subject', SubjectSchema);

module.exports = SubjectModel;