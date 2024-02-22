const AppSettings = require('../Models/AppSettings')
function appSetting(req, res, next) {
    if (!res.locals.setting)
        AppSettings.findOne().then((setting) => {
            res.locals.setting = setting;
            next();
        }).catch((err) => {
            console.log(err);
            next(err);
        });

}

module.exports = appSetting;