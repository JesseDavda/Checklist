const mongoose = require('../db.js');
const Checklists = mongoose.model('Checklists');
const ColourList = require('../colours.js').colours;

module.exports = (app) => {

    function selectColour() {
        return new Promise((resolve) => {
            resolve(ColourList[Math.floor(Math.random() * (ColourList.length -1))])
        })
    }

    function saveNewChecklist(checklistData) {
        let newChecklist = new Checklists(checklistData);

        return new Promise((resolve, reject) => {
            newChecklist.save()
            .then(savedChecklist => {
                resolve(savedChecklist);
                console.log(savedChecklist)
            }).catch(e => {
                reject(e);
            })
        })
    }

    app.post('/createNewChecklist', async (req, res) => {
        let checklistData = req.body;
        let checklistBody;

        checklistData.colour = await selectColour();

        try {
            checklistBody = await saveNewChecklist(checklistData);
        } catch(e) {
            console.log(e);
        }

        res.status(200).json({ completed: true, id: checklistBody._id });  
    })
}