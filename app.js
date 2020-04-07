'use strict'

/** Importaciones **/
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

/** Archivos de rutas **/
const categoryRoutes = require('./routes/category');
const userRoutes = require('./routes/user');
const assignationRoutes = require('./routes/assignation');
const taskRoutes = require('./routes/task');

/** Middlewares **/
// Convertimos lo que nos llegue en un objeto json
app.use(bodyParser.urlencoded({extended: false})); 
app.use(bodyParser.json());

// CORS
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

// Rutas (middlewares)
app.use('/api', categoryRoutes);
app.use('/api', userRoutes);
app.use('/api', assignationRoutes);
app.use('/api', taskRoutes);

// Exportamos
module.exports = app;