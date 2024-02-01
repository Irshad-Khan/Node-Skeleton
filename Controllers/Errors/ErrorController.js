exports.error404 = (req, res, next) => {
    res.status(404).render('Errors/404', {
        'pageTitle': '404 - Page not found',
    });
};