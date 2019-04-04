const app = require('express')();

const mongoose = require('./db.js');

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log('Checklist server now listening on port: ', port);
})