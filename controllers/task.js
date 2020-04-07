'use strict'

const Task = require('../models/task');

const controller = {
    createTask: (req, res) => {
        const task = new Task();
        task.userId = req.body.userId;
        task.description = req.body.description;        
        task.date = req.body.date;
        task.status = req.body.status;
        task.important = req.body.important;
        task.categoryId = req.body.categoryId;
        task.assignationId = req.body.assignationId;

        task.save((err, taskStored) => {
            if(err) return res.status(500).send({message: 'Error al guardar la tarea'});
            if(!taskStored) return res.status(404).send({message: 'No se ha podido guardar el registro'})

            return res.status(200).send({task: taskStored});
        });
    },

    getTask: (req, res) => {
        const taskId = req.params.id;

        Task.findById(taskId, (err, task) => {
            if(err) return res.status(500).send({message: 'Error al recuperar la tarea'});
            if(!task) return res.status(404).send({message: 'La tarea no existe'});

            return res.status(200).send({task});
        });
    },

    getTasks: (req, res) => {
        const filter = {};
        if(req.query.userId != null) filter.userId = req.query.userId;
		if(req.query.description != null) filter.description = req.query.description;
		if(req.query.date != null) filter.date = req.query.date;
        if(req.query.status != null) filter.status = req.query.status;
        if(req.query.important != null) filter.important = req.query.important;
        if(req.query.categoryId != null) filter.categoryId = req.query.categoryId;
        if(req.query.assignationId != null) filter.assignationId = req.query.assignationId;

        Task.find(filter).exec((err, tasks) => {
            if(err) return res.status(500).send({message: 'Error al recuperar las tareas'});
            if(!tasks) return res.status(404).send({message: 'No hay tareas para mostrar'});

            return res.status(200).send({tasks});
        });
    },

    updateTask: (req, res) => {
        const taskId = req.params.id;
        const update = req.body;

        Task.findByIdAndUpdate(taskId, update, {new: true}, (err, updatedTask) => {
            if(err) return res.status(500).send({message: 'Error al actualizar la tarea'});
            if(!updatedTask) return res.status(404).send({message: 'No existe la tarea a actualizar'});

            return res.status(200).send({task: updatedTask});
        });
    },

    deleteTask: (req, res) => {
        const taskId = req.params.id;

        Task.findByIdAndRemove(taskId, (err, deletedTask) => {
            if(err) return res.status(500).send({message: 'Error al eliminar la tarea'});
            if(!deletedTask) return res.status(404).send({message: 'No existe la tarea a eliminar'});

            return res.status(200).send({task: deletedTask});
        });
    }
}

module.exports = controller;