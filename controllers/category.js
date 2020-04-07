'use strict'

// Cargamos el modelo
const Category = require('../models/category');

const controller = {
    createCategory: (req, res) => {
        let category = new Category();
        category.name = req.body.name;
        category.userId = req.body.userId;

        category.save((err, categoryStored) => {
            if(err) return res.status(500).send({message: 'Error al guardar la categoría'});
            if(!categoryStored) return res.status(404).send({message: 'No se ha podido guardar el registro'});

            return res.status(200).send({category: categoryStored});
        });
    },

    getCategory: (req, res) => {
        const categoryId = req.params.id;

        Category.findById(categoryId, (err, category) => {
            if(err) return res.status(500).send({message: 'Error al recuperar la categoría'});
            if(!category) return res.status(404).send({message: 'La categoría no existe'});

            return res.status(200).send({category});
        });
    },

    getCategories: (req, res) => {
        const filter = {};
        if(req.query.userId != null) filter.userId = req.query.userId;
        
        Category.find(filter).exec((err, categories) => {
            if(err) return res.status(500).send({message: 'Error al recuperar las categorías'});
            if(!categories) return res.status(404).send({message: 'No hay categorías para mostrar'});

            return res.status(200).send({categories});
        });
    },

    updateCategory: (req, res) => {
        const categoryId = req.params.id;
        const update = req.body;

        Category.findByIdAndUpdate(categoryId, update, {new: true}, (err, categoryUpdated) => {
            if(err) return res.status(500).send({message: 'Error al actualizar la categoría'});
            if(!categoryUpdated) return res.status(404).send({message: 'No existe la categoría a actualizar'});

            return res.status(200).send({category: categoryUpdated});
        });
    },

    deleteCategory: (req, res) => {
        const categoryId = req.params.id;

        Category.findByIdAndRemove(categoryId, (err, categoryDeleted) => {
            if(err) return res.status(500).send({message: 'Error al eliminar la categoría'});
            if(!categoryDeleted) return res.status(404).send({message: 'No existe la categoría a eliminar'});

            return res.status(200).send({category: categoryDeleted});
        });
    }
}

module.exports = controller;