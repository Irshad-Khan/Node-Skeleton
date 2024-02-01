function setCurrentUrl(req, res, next) {
    res.locals.currentUrl = req.originalUrl.split('/')[1];
    next();
}

module.exports = setCurrentUrl;