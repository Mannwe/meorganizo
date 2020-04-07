'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TaskSchema = Schema({
    userId: String,
    description: String,
    date: String,
    status: String,
    important: Boolean,
    categoryId: String,
    assignationId: String
});

module.exports = mongoose.model('Task', TaskSchema); 