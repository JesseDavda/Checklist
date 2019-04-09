const mongoose = require('../db.js');
const Checklists = mongoose.model('Checklists');

module.exports = (app) => {
    app.post('/deleteChecklist', (req, res) => {
        let checklistId = req.body.id;

        Checklists.findOneAndDelete({_id: checklistId}, (err, doc) => {
            if(err) console.log(err);
        })
    })
}