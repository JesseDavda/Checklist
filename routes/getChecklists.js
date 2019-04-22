const mongoose = require('../db.js');
const Checklists = mongoose.model('Checklists');

module.exports = (app) => {
    app.post('/getChecklists', (req, res) => {
        let checklistFound = {};

        if(req.body.id) {
            Checklists.find({"userId": req.body.id}, (err, checklist) => {
                if(err) console.log(err);

                checklistFound = checklist;
                res.json({completed: true, checklist: checklistFound});
            });
        } else {
            res.json({completed: false, message: "An Invalid Id was supplied"});
        }
    });
}