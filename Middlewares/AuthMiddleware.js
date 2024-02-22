const isLoggedIn = (req, res, next) => {
    // Check if the user is logged in
    if (!req.session.user) {
        if (req.path !== '/' && req.path !== '/register' && req.path !== '/forgot-password') {
            return res.redirect('/');
        }
    } else {
        // If the user is logged in, allow them to proceed
        res.locals.user = req.session.user;
        return next();
    }
    next();
};

module.exports = { isLoggedIn };
