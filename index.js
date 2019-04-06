const bodyParser = require('body-parser');
const cors = require('cors');
const app = require('express')();

const mongoose = require('./db.js');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cors());

require('./routes/getChecklists.js')(app, mongoose);
require('./routes/newChecklist.js')(app);

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log('Checklist server now listening on port: ', port);
});