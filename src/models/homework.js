import {Schema, model} from 'mongoose';

const homeworkSchema = Schema({
    name: String,
    create: Date,
    user:{type: Schema.Types.ObjectId, ref: 'User'}
});

export default model('Homework', homeworkSchema);