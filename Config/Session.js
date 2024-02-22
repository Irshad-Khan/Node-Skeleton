const session = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const sequelize = require('./Database');

const configureSession = () => {

    const sessionStore = new SequelizeStore({
        db: sequelize,
    });

    var sesssion = session({
        secret: 'my secret',
        resave: false,
        store: sessionStore,
        saveUninitialized: false
    });
    sessionStore.sync();

    return sesssion;
};

module.exports = configureSession;
