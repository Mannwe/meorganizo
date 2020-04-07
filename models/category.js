'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CategorySchema = Schema({
    userId: String,
    name: String
});

module.exports = mongoose.model('Category', CategorySchema); // Crea una colección llamada categories