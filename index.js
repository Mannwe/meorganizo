'use strict'

const mongoose = require('mongoose');
const app = require('./app');
const port = process.env.PORT || 3700;

mongoose.Promise = global.Promise;

/* Conexión local a Mongodb
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
});*/

/* Conexión a Mongodb en el servidor heroku*/
mongoose.connect('mongodb://dbManwe:Dvseral2007@ds039427.mlab.com:39427/heroku_4wsncvn0', {useUnifiedTopology: true, useNewUrlParser: true })
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