const mongoose = require('../db.js');
const UserData = mongoose.model('UserData');
const bcrypt = require('bcrypt');

function saveUser(userBody) {
    let newUser = new UserData(userBody);

    return newUser.save()
        .then(savedUser => savedUser)
        .catch(e => e);
}

module.exports = app => {
    app.post('/signup', async (req, res) => {
        const password = await bcrypt.hash(req.body.password, 10);

        const userBody = {
            email: req.body.email,
            password: password
        }

        try {
            const userDataBody = await saveUser(userBody);
            res.status(200).json({completed: true, userAccountId: userDataBody._id});
        } catch {
            console.log(e);
        }
    });
}