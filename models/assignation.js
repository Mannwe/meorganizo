'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AssignationSchema = Schema({
    userId: String,
    name: String
});

module.exports = mongoose.model('Assignation', AssignationSchema); // Genera una colección llamada assignations