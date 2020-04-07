'use strict'

const express = require('express');
const TaskController = require('../controllers/task');
const router = express.Router();

router.post('/createTask', TaskController.createTask);
router.get('/task/:id', TaskController.getTask);
router.get('/tasks', TaskController.getTasks);
router.put('/task/:id', TaskController.updateTask);
router.delete('/task/:id', TaskController.deleteTask);

module.exports = router;