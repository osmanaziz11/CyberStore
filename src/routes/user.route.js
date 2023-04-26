const userRoutes = require('express').Router();
const userController = require('../controller/user.controller');

userRoutes.post('/createAccount', userController.createAccount);
userRoutes.post('/signin', userController.signIn);

module.exports = userRoutes;
