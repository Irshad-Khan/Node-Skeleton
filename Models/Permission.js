const DataType = require('sequelize');

const sequelizeObject = require('../Config/Database');

const Permission = sequelizeObject.define('permission', {
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
    status: {
        type: DataType.TINYINT,
        allowNull: false,
        defaultValue: 1
    }
});

module.exports = Permission;