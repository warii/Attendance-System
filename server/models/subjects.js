import mongoose from 'mongoose';
import Version from './version';
const Schema = mongoose.Schema;

const SubjectSchema = new Schema({
    user: [user.schema],
    time: {
        type: String,

    },
    name: {
        type: String,
    }
});

const SubjectModel = mongoose.model('Subject', SubjectSchema);

export default EntryModel;