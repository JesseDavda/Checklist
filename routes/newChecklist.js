const mongoose = require('../db.js');
const Checklists = mongoose.model('Checklists');

module.exports = (app) => {
    app.post('/createNewChecklist', (req, res) => {
        let checklistData = req.body;

        let newChecklist = new Checklists(checklistData);

        newChecklist.save()
        .then(savedChecklist => {
            console.log("New checklist: ", savedChecklist);
        }).catch(e => {
            console.log(e);
        })
    })
}