const DataType = require('sequelize');

const sequelizeObject = require('../Config/Database');

const Role = sequelizeObject.define('role', {
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

module.exports = Role;