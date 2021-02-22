const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Usuario = new Schema({
    usuario: {  
        type: String,
        trim: true
    },
    contraseña: {
        type: String,
        trim: true
    },
    numero: {
        type: String,
        trim: true
    },
    email: {
        type: String,
        trim: true
    }
})

module.exports = mongoose.model('Usuario', Usuario);