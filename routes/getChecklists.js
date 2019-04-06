const mongoose = require('../db.js');
const Checklists = mongoose.model('Checklists');

module.exports = (app, mongoose) => {
    app.post('/getChecklists', (req, res) => {
        let checklistFound = {};

        Checklists.find({"id": req.body.id}, (err, checklist) => {
            if(err) console.log(err);

            console.log(checklist);
            checklistFound = checklist;
            res.json({completed: true, checklist: checklistFound});
        })
    });
}