const { Schema, model } = require('mongoose');

const newSchema = new Schema({
    ncliente: {
        type: String,
        required: true,
        unique: true
    },
    cpuser: {
        type: String,
        required: true,
        unique:true,
        trim: true
    },
    cpwp: {
        type: String,
        required: true,
        trim:true
    },
    bbdname: {
        type: String,
        required: true,
        trim:true
    },
    bbduser: {
        type: String,
        required:true,
        trim: true,
    },    
    bbdpwd: {
        type: String,
        required: true,
        trim: true
    },
    wpuser: {
        type: String,
        required: true,
        trim: true
    },
    wppw: {
        type: String,
        required: true,
        trim: true
    }

})

module.exports = model( 'Task', newSchema );