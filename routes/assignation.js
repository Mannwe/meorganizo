'use strict'

const express = require('express');
const AssignationController = require('../controllers/assignation');
const router = express.Router();

router.post('/createAssignation', AssignationController.createAssignation);
router.get('/assignation/:id', AssignationController.getAssignation);
router.get('/assignations', AssignationController.getAssignations);
router.put('/assignation/:id', AssignationController.updateAssignation);
router.delete('/assignation/:id', AssignationController.deleteAssignation);

module.exports = router;