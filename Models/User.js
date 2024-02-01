const DataType = require('sequelize');

const sequelizeObject = require('../Config/Database');

const User = sequelizeObject.define('user', {
    id: {
        type: DataType.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    first_name: {
        type: DataType.STRING,
        allowNull: false,
    },
    last_name: {
        type: DataType.STRING,
        allowNull: false,
    },
    email: {
        type: DataType.STRING,
        allowNull: false,
        unique: true,
    },
    password: {
        type: DataType.STRING,
        allowNull: false,
    },
    phone: {
        type: DataType.STRING,
        allowNull: true,
    },
    profile_image: {
        type: DataType.STRING,
        allowNull: true,
    },
    dob: {
        type: DataType.STRING,
        allowNull: true,
    },
    gender: {
        type: DataType.STRING,
        allowNull: true,
    },
    address: {
        type: DataType.TEXT,
        allowNull: true,
    },
    status: {
        type: DataType.TINYINT,
        allowNull: true,
        defaultValue: 1
    }
});

// User.hasMany(Product);

module.exports = User;