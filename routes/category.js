'use strict'

const express = require('express');
const CategoryController = require('../controllers/category');
const router = express.Router();

router.post('/createCategory', CategoryController.createCategory);
router.get('/category/:id', CategoryController.getCategory);
router.get('/categories', CategoryController.getCategories);
router.put('/category/:id', CategoryController.updateCategory);
router.delete('/category/:id', CategoryController.deleteCategory);

module.exports = router;