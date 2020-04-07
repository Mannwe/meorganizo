'use strict'

const Assignation = require('../models/assignation');

const controller = {
    createAssignation: (req, res) => {
        const assignation = new Assignation();
        assignation.name = req.body.name;
        assignation.userId = req.body.userId;

        assignation.save((err, assignationStored) => {
            if(err) return res.status(500).send({message: 'Error al guardar la asignación'});
            if(!assignationStored) return res.status(404).send({message: 'No se ha podido guardar el registro'});

            return res.status(200).send({assignation: assignationStored});
        });
    },

    getAssignation: (req, res) => {
        const assignationId = req.params.id;

        Assignation.findById(assignationId, (err, assignation) => {
            if(err) return res.status(500).send({message: 'Error al recuperar la asignación'});
            if(!assignation) return res.status(200).send({message: 'No existe la asignación'});

            return res.status(200).send({assignation});
        });
    },

    getAssignations: (req, res) => {
        const filter = {};
        if(req.query.userId != null) filter.userId = req.query.userId;

        Assignation.find(filter).exec((err, assignations) => {
            if(err) return res.status(500).send({message: 'Error al recuperar las asignaciones'});
            if(!assignations) return res.status(404).send({message: 'No hay asignaciones para mostrar'});
            
            return res.status(200).send({assignations});
        });
    },

    updateAssignation: (req, res) => {
        const assignationId = req.params.id;
        const update = req.body;

        Assignation.findByIdAndUpdate(assignationId, update, {new: true}, (err, assignationUpdated) => {
            if(err) return res.status(500).send({message: 'Error a actualizar la asignación'});
            if(!assignationUpdated) return res.status(404).send({message: 'No existe la asignación a actualizar'});

            return res.status(200).send({assignation: assignationUpdated});
        });
    },

    deleteAssignation: (req, res) => {
        const assignationId = req.params.id;

        Assignation.findByIdAndRemove(assignationId, (err, assignationDeleted) => {
            if(err) return res.status(500).send({message: 'Error al borrar la asignación'});
            if(!assignationDeleted) return res.status(404).send({message: 'No existe la asignación a eliminar'});

            return res.status(200).send({assignation: assignationDeleted});
        });
    }
}

module.exports = controller;