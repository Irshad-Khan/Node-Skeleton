const AppSettings = require('../../Models/AppSettings')
exports.index = (req, res, next) => {
    AppSettings.findOne().then((settings) => {

        res.render('Admin/App_Settings/index', {
            pageTitle: 'App Settings',
            appSettings: settings
        });
    }).catch((err) => {
        console.log(err);
    })

};

exports.update = (req, res, next) => {

    AppSettings.upsert(
        {
            name: req.body.name,
            email: req.body.email,
            address: req.body.address
        },
        {
            where: { id: req.body.id }
        }).then((response) => {
            res.redirect('/app-settings');
        }).catch((err) => {
            console.log(err);
        })

};