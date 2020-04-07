'use strict'

const mongoose = require('mongoose');
const app = require('./app');
const port = process.env.PORT || 3700;

mongoose.Promise = global.Promise;

// Conexión local a Mongodb
mongoose.connect('mongodb://localhost:27017/meorganizo', {useUnifiedTopology: true, useNewUrlParser: true })
.then(() => {
    console.log('La conexión con la base de datos se ha establecido con éxito');

    // Creamos el servidor Nodejs
    app.listen(port, () => {
        console.log('Servidor ejecutándose en el puerto ' + port);
    });
})
.catch(error => {
    console.log(error);
});
