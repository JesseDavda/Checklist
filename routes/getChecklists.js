const mongoose = require('../db.js');
const Checklists = mongoose.model('Checklists');

module.exports = (app) => {
    app.post('/getChecklists', (req, res) => {
        let checklistFound = {};

        Checklists.find({"userId": req.body.id}, (err, checklist) => {
            if(err) console.log(err);

            checklistFound = checklist;
            res.json({completed: true, checklist: checklistFound});
        })
    });
}