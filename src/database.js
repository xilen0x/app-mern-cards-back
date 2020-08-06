const mongoose = require('mongoose');

const URI = process.env.MONGODB_URI;//aki llamo a mi variable de entorno que contiene la url de la db.

mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology:true
});

const connection = mongoose.connection;

connection.once('open', () => { 
    console.log('DB is connected');
});