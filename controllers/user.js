'use strict'

const User = require('../models/user');
const bcrypt = require('bcrypt');
const BCRYPT_SALT_ROUNDS = 10;

const controller = {
    saveUser: (req, res) => {
        const user = new User();
        user.name = req.body.name;    
        const inputPassword = req.body.password;

        bcrypt.hash(inputPassword, BCRYPT_SALT_ROUNDS)
        .then(hashedPassword => {
            user.password = hashedPassword;
            user.save((err, userStored) => {
                if(err) return res.status(500).send({message: 'Error al guardar el usuario'});
                if(!userStored) return res.status(404).send({message: 'No se ha podido guardar el registro'});
    
                return res.status(200).send({user: userStored});
            });
        });
    },

    authenticate: (req, res) => {
        
        const inputUser = new User();
        inputUser.name = req.body.name;
        inputUser.password = req.body.password;
        
        const filter = {name: inputUser.name};

        User.find(filter).exec((err, user) => {
            if(err) return res.status(500).send({message: 'Error al recuperar el usuario'});
            if(err) return res.status(404).send({message: 'El usuario no existe'});

            bcrypt.compare(inputUser.password, user[0].password).
            then(samePassword =>{
                if(!samePassword) return res.status(403).send({message: 'error'});
                
                return res.status(200).send({message: 'ok'});
            }).
            catch(error => {
                return res.status(500).send({error: error});
            });
        });
    },

    getUser: (req, res) => {
        const userId = req.params.id;

        User.findById(userId, (err, user) => {
            if(err) return res.status(500).send({message: 'Error al recuperar el usuario'});
            if(err) return res.status(404).send({message: 'El usuario no existe'});

            return res.status(200).send({user});
        });
    },

    getUserByName: (req, res) => {
        const userName = req.params.name;
        const filter = {name: userName};

        User.find(filter).exec((err, user) => {
            if(err) return res.status(500).send({message: 'Error al recuperar el usuario'});
            if(err) return res.status(404).send({message: 'El usuario no existe'});

            return res.status(200).send({user});
        });
    },

    updateUser: (req, res) => {
        const userId = req.params.id;
        const update = req.body;

        const inputPassword = update.password;

        bcrypt.hash(inputPassword, BCRYPT_SALT_ROUNDS)
        .then(hashedPassword => {
            update.password = hashedPassword;
            User.findByIdAndUpdate(userId, update, {new: true}, (err, updatedUser) => {
                if(err) return res.status(500).send({message: 'Error al actualizar el usuario'});
                if(!updatedUser) return res.status(404).send({message: 'No existe el usuario a actualizar'});
    
                return res.status(200).send({user: updatedUser});
            });
        });
    },

    deleteUser: (req, res) => {
        const userId = req.params.id;

        User.findByIdAndRemove(userId, (err, deletedUser) => {
            if(err) return res.status(500).send({message: 'Error al eliminar el usuario'});
            if(!deletedUser) return res.status(404).send({message: 'No existe el usuario a eliminar'});

            return res.status(200).send({user: deletedUser});
        })
    }
}

module.exports = controller;