const User = require('../../Models/User');


exports.index = (req, res, next) => {
    User.findAll({
        rder: [['id', 'DESC']]
    }).then((users) => {
        res.render('Admin/Users/index', {
            pageTitle: 'Users',
            users: users
        });
    }).catch((err) => {
        console.log(err);
    })
};


exports.create = (req, res, next) => {
    res.render('Admin/Users/create', {
        pageTitle: 'Users'
    });
};

exports.store = (req, res, next) => {
    User.create({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        password: req.body.password,
        phone: req.body.phone,
        dob: req.body.dob,
        gender: req.body.gender,
        address: req.body.address,
        status: req.body.status || 1
    }).then((response) => {
        res.redirect('/users');
    }).catch((err) => {
        console.log(err);
    });
};

exports.edit = (req, res, next) => {

    User.findOne({
        where: {
            id: req.params.id
        }
    }).then((user) => {

        res.render('Admin/Users/edit', {
            pageTitle: 'User Edit',
            user: user
        });
    }).catch((err) => {
        console.log(err);
    });
};

exports.update = (req, res, next) => {
    User.update(
        {
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            email: req.body.email,
            password: req.body.password,
            phone: req.body.phone,
            dob: req.body.dob,
            gender: req.body.gender,
            address: req.body.address,
            status: req.body.status || 1
        },
        {
            where: { id: req.body.id }
        }
    )
        .then((response) => {
            res.redirect('/users');
        })
        .catch((err) => {
            console.log(err);
        });
};

exports.profile = (req, res, next) => {

    User.findOne({
        where: {
            id: req.params.id
        }
    }).then((user) => {

        res.render('Admin/Users/profile', {
            pageTitle: 'User Profile',
            user: user
        });
    }).catch((err) => {
        console.log(err);
    });
};


exports.delete = (req, res, next) => {
    User.destroy({
        where: {
            id: req.body.id
        }
    }).then((response) => {
        res.redirect('/users');
    }).catch((err) => {
        console.log(err);
    });
};