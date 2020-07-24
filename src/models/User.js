const { Schema, model } = require('mongoose');

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        trim:true, //para limpiar los espacios del string..o algo asi.:)
        unique:true 
    }
}, {
    timestamps:true
});

module.exports = model('User', userSchema);