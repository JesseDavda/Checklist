const mongoose = require('../db.js');
const Checklists = mongoose.model('Checklists');

function findChecklist(listId) {
    return Checklists.findOne({ _id: listId })
            .then(list => list)
            .catch(e => e);
}

function addChecklist(list, userId) {
    let originalChecklist = list;
    originalChecklist.userId = userId;

    let newList = new Checklists(list);

    return newList.save()
                .then(savedList => savedList)
                .catch(e => e)
}

module.exports = (app) => {
    app.get('/imprList?id=:listId&userId=:userId', async (req, res) => {
        let listId = req.params.listId;
        let userId = req.params.userId;

        try {
            let checklist = await findChecklist(listId);
            let savedList = await addChecklist(checklist, userId);

            res.status(200).json({ completed: true, list: savedList });
        } catch {
            res.status(500).json({ completed: false, errorMessage: "There was a problem with adding the checklist" });
        }
    });
}