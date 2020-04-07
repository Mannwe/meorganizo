'use strict'

const express = require('express');
const UserController = require('../controllers/user');
const router = express.Router();

router.post('/saveUser', UserController.saveUser);
router.get('/user/:id', UserController.getUser);
router.get('/userByName/:name', UserController.getUserByName);
router.post('/authentication/', UserController.authenticate);
router.put('/user/:id', UserController.updateUser);
router.delete('/user/:id', UserController.deleteUser);

module.exports = router;