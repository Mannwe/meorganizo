'use strict'

const mongoose = require('mongoose');
/*const encrypt = require('mongoose-encryption');
const crypto = require('crypto');*/
const Schema = mongoose.Schema;

const UserSchema = Schema({
    name: String,
    password: String
});

/* Encriptaremos la password
var encKey = process.env.SOME_32BYTE_BASE64_STRING;
var sigKey = process.env.SOME_64BYTE_BASE64_STRING;

let encKey, sigKey;

require('crypto').randomBytes(32, function(err, buffer) {
    encKey = buffer.toString('base64');
});

require('crypto').randomBytes(64, function(err, buffer) {
    sigKey = buffer.toString('base64');
});

console.log('encKey', encKey, sigKey);

UserSchema.plugin(encrypt, { encryptionKey: encKey, signingKey: sigKey, encryptedFields: ['password'] });*/

module.exports = mongoose.model('User', UserSchema); // Genera una colección llamada assignatios