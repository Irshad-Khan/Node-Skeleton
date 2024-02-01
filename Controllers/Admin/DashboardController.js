exports.index = (req, res, next) => {
    res.render('Admin/Index', {
        pageTitle: 'Dashboard'
    });
};