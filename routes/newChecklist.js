const mongoose = require('../db.js');
const Checklists = mongoose.model('Checklists');

module.exports = (app) => {

    function saveNewChecklist(checklistData) {
        let newChecklist = new Checklists(checklistData);

        return new Promise((resolve, reject) => {
            newChecklist.save()
            .then(savedChecklist => {
                resolve(savedChecklist);
            }).catch(e => {
                reject(e);
            })
        })
    }

    app.post('/createNewChecklist', async (req, res) => {
        let checklistData = req.body;
        let checklistBody;

        try {
            checklistBody = await saveNewChecklist(checklistData);
        } catch(e) {
            console.log(e);
        }

        res.status(200).json({ completed: true, id: checklistBody._id });  
    })
}