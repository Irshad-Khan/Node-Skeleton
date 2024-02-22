exports.index = (req, res, next) => {
    console.log(req.session.user);
    res.render('Admin/Index', {
        pageTitle: 'Dashboard'
    });
};