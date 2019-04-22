const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');
const serveStatic = require("serve-static");
const path = require('path');

const app = express();

const mongoose = require('./db.js');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(serveStatic(path.join(__dirname, 'dist')));
app.use(cors());

require('./routes/getChecklists.js')(app);
require('./routes/newChecklist.js')(app);
require('./routes/saveSingleChecklist.js')(app);
require('./routes/deleteChecklist.js')(app);
require('./routes/newAccount.js')(app);
require('./routes/loginAccount.js')(app);

app.get('/checklists', (req, res) => {
    res.redirect('/');
})

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log('Checklist server now listening on port: ', port);
});