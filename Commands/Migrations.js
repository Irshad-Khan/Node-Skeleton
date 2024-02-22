const User = require('../Models/User');
const Permission = require('../Models/Permission');
const Role = require('../Models/Role');
const AppSettings = require('../Models/AppSettings');

const sequelize = require('../Config/Database');

// Product.belongsTo(User, { constraint: true, onDelete: "CASCADE" });
// User.hasMany(Product);

// User.sync();
// Permission.sync();
// Role.sync();
AppSettings.sync();
console.log("Migrated Successfully: ctrl+c to exit");
