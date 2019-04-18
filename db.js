const mongoose = require('mongoose');
const Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost/checklist', { useNewUrlParser: true });
console.log('Connected to the mongo database');

const checklistSchema = new Schema({
    userId: String,
    name: String,
    checklistItems: Array
})

const userSchema = new Schema({
    email: String,
    firstName: String,
    lastName: String,
    password: String
})

const Checklists = mongoose.model('Checklists', checklistSchema, 'Checklists');
const UserData = mongoose.model('UserData', userSchema, 'UserData');

module.exports = mongoose;