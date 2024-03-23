const express = require('express');
const { registerUser, loginUser, getUsers } = require('../userController');
const ensureAuthenticated = require('../utility/auth');
const { userRegisterValidate, userLoginValidate} = require('../utility/userValidation');
const routes = express.Router();

routes.post('/register', userRegisterValidate, registerUser);

routes.post('/login', userLoginValidate, loginUser);

routes.get('/users', ensureAuthenticated, getUsers);

module.exports = routes;