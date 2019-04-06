const mongoose = require('mongoose');
const Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost/checklist', { useNewUrlParser: true });
console.log('Connected to the mongo database');

const checklistSchema = new Schema({
    id: Number,
    name: String,
    checklistItems: Array
})

const Checklists = mongoose.model('Checklists', checklistSchema, 'Checklists');

module.exports = mongoose;