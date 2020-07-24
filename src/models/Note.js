const { Schema, model } = require('mongoose');

const noteSchema = new Schema({
    title: String,
    content: {
        type: String,
        required: true
    },
    author: String,
    date: {
        type: Date,
        default: Date.now // si no recibe una fecha utilizará la actual.
    }
}, {
    timestamps:true// esto guarda la fecha aumatica de cuando se creo o actualizó el esquema
});

module.exports = model('Note', noteSchema);