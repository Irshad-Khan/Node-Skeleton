const { response } = require("express");
const bcryptjs = require('bcryptjs')

const User = require("../../Models/User");

exports.showLoginForm = (req, res, next) => {
    res.render('Auth/Login', {
        pageTitle: "Login"
    });
}

exports.login = (req, res, next) => {
    const email = req.body.email;
    const password = req.body.password;
    console.log(email, password);
    User.findOne({ where: { email: email } }).then(user => {
        if (!user) {
            return res.redirect('/');
        }
        // In do match is true of false
        bcryptjs.compare(password, user.password).then(doMatch => {
            if (doMatch) {
                req.session.isloggedin = true;
                req.session.user = user;
                return res.redirect('/dashboard');
            }
            res.redirect('/');
        }).catch(err => {
            console.log(err);
            res.redirect('/');
        });
    }).catch((err) => { console.log(err); });


}

exports.showRegistrationForm = (req, res, next) => {
    res.render('Auth/Register', {
        pageTitle: "Registration"
    });
}

// Below is chain of then first then is for hash passowrd as it is a sync
// secnod is for create user
// last is for find one function
exports.register = (req, res, next) => {

    const first_name = req.body.first_name;
    const last_name = req.body.last_name;
    const email = req.body.email;
    const password = req.body.password;
    const confirm_password = req.body.confirm_password;

    User.findOne(
        {
            where: {
                email: email
            }
        }).then((user) => {
            if (user) {
                res.redirect('/register');
            } else {
                return bcryptjs.hash(password, 12).then(hashPasswords => {

                    return User.create({
                        'first_name': first_name,
                        'last_name': last_name,
                        'email': email,
                        'password': hashPasswords,
                    });

                })
                    .then(response => {
                        res.redirect('/');
                    });
            }
        }).catch((err) => {
            console.log(err);
        })
}

exports.showForgotPasswordForm = (req, res, next) => {
    res.render('Auth/forgot-password', {
        pageTitle: "Forgot Password"
    });
}

exports.logout = (req, res, next) => {
    req.session.destroy((error) => {
        console.log(error);
        res.redirect('/');
    });
}