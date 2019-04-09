const mongoose = require("../db.js");
const Checklists = mongoose.model('Checklists');

module.exports = (app) => {
    app.post('/saveChecklist', (req, res) => {
        let query = {_id: req.body.checklist._id};

        Checklists.findOneAndUpdate(query, req.body.checklist, {upsert: true}, (err, doc) => {
            if(err) console.log(err);

            res.json({id: doc._id});
        })
    });
}