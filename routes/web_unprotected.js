const express = require('express');

const LoginController = require('../Controllers/Auth/LoginController');
const Route = express.Router();

Route.get('/', LoginController.showLoginForm);
Route.get('/register', LoginController.showRegistrationForm);
Route.get('/forgot-password', LoginController.showForgotPasswordForm);
Route.post('/login', LoginController.login);
Route.post('/register', LoginController.register);


module.exports = Route;