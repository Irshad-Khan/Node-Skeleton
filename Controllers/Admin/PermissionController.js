const Permission = require('../../Models/Permission');


exports.index = (req, res, next) => {
    Permission.findAll({
        rder: [['id', 'DESC']]
    }).then((permissions) => {
        res.render('Admin/Permissions/index', {
            pageTitle: 'Permissions',
            permissions: permissions
        });
    }).catch((err) => {
        console.log(err);
    })
};


exports.create = (req, res, next) => {
    res.render('Admin/Permissions/create', {
        pageTitle: 'Permissions'
    });
};

exports.store = (req, res, next) => {
    Permission.create({
        name: req.body.name,
        status: req.body.status || 1
    }).then((response) => {
        res.redirect('/permissions');
    }).catch((err) => {
        console.log(err);
    });
};

exports.edit = (req, res, next) => {

    Permission.findOne({
        where: {
            id: req.params.id
        }
    }).then((permission) => {

        res.render('Admin/Permissions/edit', {
            pageTitle: 'Permission Edit',
            permission: permission
        });
    }).catch((err) => {
        console.log(err);
    });
};

exports.update = (req, res, next) => {
    Permission.update(
        {
            name: req.body.name,
            status: req.body.status || 1
        },
        {
            where: { id: req.body.id }
        }
    )
        .then((response) => {
            res.redirect('/permissions');
        })
        .catch((err) => {
            console.log(err);
        });
};


exports.delete = (req, res, next) => {
    Permission.destroy({
        where: {
            id: req.body.id
        }
    }).then((response) => {
        res.redirect('/permissions');
    }).catch((err) => {
        console.log(err);
    });
};