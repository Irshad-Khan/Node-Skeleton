const express = require('express');

const LoginController = require('../Controllers/Auth/LoginController');
const DashboardController = require('../Controllers/Admin/DashboardController');
const RoleController = require('../Controllers/Admin/RoleController');
const PermissionController = require('../Controllers/Admin/PermissionController');
const UserController = require('../Controllers/Admin/UserController');
const Route = express.Router();

Route.get('/', LoginController.showLoginForm);
Route.get('/register', LoginController.showRegistrationForm);

Route.get('/dashboard', DashboardController.index);

Route.get('/roles', RoleController.index);
Route.get('/role-create', RoleController.create);
Route.post('/role-store', RoleController.store);
Route.post('/role-delete', RoleController.delete);
Route.get('/role-edit/:id', RoleController.edit);
Route.post('/role-update', RoleController.update);

Route.get('/permissions', PermissionController.index);
Route.get('/permission-create', PermissionController.create);
Route.post('/permission-store', PermissionController.store);
Route.post('/permission-delete', PermissionController.delete);
Route.get('/permission-edit/:id', PermissionController.edit);
Route.post('/permission-update', PermissionController.update);

Route.get('/users', UserController.index);
Route.get('/user-create', UserController.create);
Route.post('/user-store', UserController.store);
Route.post('/user-delete', UserController.delete);
Route.get('/user-edit/:id', UserController.edit);
Route.post('/user-update', UserController.update);
Route.get('/user-detail/:id', UserController.profile);


module.exports = Route;