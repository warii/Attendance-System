import mongoose from 'mongoose';
import Version from './version';
const Schema = mongoose.Schema;

const ClassSchema = new Schema({

})

var ClassModel = mongoose.model('Class', ClassSchema);

export default ClassModel