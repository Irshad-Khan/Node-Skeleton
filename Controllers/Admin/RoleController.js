const Role = require('../../Models/Role');


exports.index = (req, res, next) => {
    Role.findAll({
        rder: [['id', 'DESC']]
    }).then((roles) => {
        res.render('Admin/Roles/index', {
            pageTitle: 'Roles',
            roles: roles
        });
    }).catch((err) => {
        console.log(err);
    })
};


exports.create = (req, res, next) => {
    res.render('Admin/Roles/create', {
        pageTitle: 'Roles'
    });
};

exports.store = (req, res, next) => {
    Role.create({
        name: req.body.name,
        status: req.body.status || 1
    }).then((response) => {
        res.redirect('/roles');
    }).catch((err) => {
        console.log(err);
    });
};

exports.edit = (req, res, next) => {

    Role.findOne({
        where: {
            id: req.params.id
        }
    }).then((role) => {

        res.render('Admin/Roles/edit', {
            pageTitle: 'Roles Edit',
            role: role
        });
    }).catch((err) => {
        console.log(err);
    });
};

exports.update = (req, res, next) => {
    Role.update(
        {
            name: req.body.name,
            status: req.body.status || 1
        },
        {
            where: { id: req.body.id }
        }
    )
        .then((response) => {
            res.redirect('/roles');
        })
        .catch((err) => {
            console.log(err);
        });
};


exports.delete = (req, res, next) => {
    Role.destroy({
        where: {
            id: req.body.id
        }
    }).then((response) => {
        res.redirect('/roles');
    }).catch((err) => {
        console.log(err);
    });
};