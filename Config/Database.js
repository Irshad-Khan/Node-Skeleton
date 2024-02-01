const Sequelize = require('sequelize');
require('dotenv').config();

const databaseName = process.env.DB_NAME || '';
const databaseUser = process.env.DB_USER || 'root';
const databasePassword = process.env.DB_PASSWORD || '';
const databaseEngine = process.env.DB_TYPE || 'mysql';
const databaseHost = process.env.DB_HOST || 'localhost';

const sequelizeConnction = new Sequelize(databaseName, databaseUser, databasePassword, {
    dialect: databaseEngine,
    host: databaseHost
});

module.exports = sequelizeConnction;