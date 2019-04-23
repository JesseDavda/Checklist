const mongoose = require('../db.js');
const UserData = mongoose.model('UserData');
const bcrypt = require('bcrypt');
const { check, validationResult } = require('express-validator/check');

function comparePasswords(passwordPlain, passwordHash) {
    return bcrypt.compare(passwordPlain, passwordHash).then(res => res);
}

function findUser(email, password) {
    return new Promise((resolve, reject) => {
        UserData.findOne({"email": email}, async (err, account) => {
            console.log(account);
            if(err) {
                console.log(err);
            } else if(account) {
                if(await comparePasswords(password, account.password)) {
                    console.log("Account succesfully entered");
                    resolve(account);
                } else {
                    console.log("Invalid Email/Password");
                    reject("Invalid email/password")
                }
            } else if(account == null) {
                reject("No account found");
            }
        });
    })
}

module.exports = app => {
    app.post('/login',[
        check('email').isEmail(),
        check('password')
    ], async(req, res) => {
        const errors = validationResult(req);

        if(!errors.isEmpty()) {
            res.status(422).json({errors: errors.array()})
        } else {
            let UserEmail = req.body.email;
            let UserPassword = req.body.password;

            try {
                const UserAccount = await findUser(UserEmail, UserPassword) 
                res.status(200).json({completed: true, accountId: UserAccount._id});
            } catch {
                res.status(200).json({completed: false, message: "Invalid Email/Password combination"});
            }
        }
    });
}