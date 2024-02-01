const User = require('../Models/User');
const Permission = require('../Models/Permission');
const Role = require('../Models/Role');

const sequelize = require('../Config/Database');

// Product.belongsTo(User, { constraint: true, onDelete: "CASCADE" });
// User.hasMany(Product);

User.sync();
Permission.sync();
Role.sync();

console.log("Migrated Successfully: ctrl+c to exit");
