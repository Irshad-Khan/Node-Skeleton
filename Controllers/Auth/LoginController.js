exports.showLoginForm = (req, res, next) => {
    res.render('Auth/Login');
}

exports.showRegistrationForm = (req, res, next) => {
    res.render('Auth/Register');
}