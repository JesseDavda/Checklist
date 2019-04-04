const mongoose = require('mongoose');
const Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost/checklist', { useNewUrlParser: true });
console.log('Connected to the mongo database');

const checklistSchema = new Schema({
    _id: String,
    name: String,
    checklistItems: Array,
    resetInterval: Date
})

const checklists = mongoose.model('Checklists', checklistSchema, 'Checklists');

module.exports = mongoose;