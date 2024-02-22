const DataType = require('sequelize');

const sequelizeObject = require('../Config/Database');

const AppSetting = sequelizeObject.define('app_setting', {
    id: {
        type: DataType.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: DataType.STRING,
        allowNull: false
    },
    email: {
        type: DataType.STRING,
        allowNull: false,
        unique: true,
    },
    address: {
        type: DataType.TEXT,
        allowNull: true,
        defaultValue: 1
    },
    logo: {
        type: DataType.STRING,
        allowNull: true
    },
});

module.exports = AppSetting;