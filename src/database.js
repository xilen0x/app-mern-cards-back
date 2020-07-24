const mongoose = require('mongoose');

const URI = process.env.MONGODB_URI;//aki llamo a mi variable de entorno que contiene la url de la db.

mongoose.connect(URI, { //estas opciones luego de URI, se pueden obviar posteriormente.
    useNewUrlParser: true,
/*    useCreateIndex: true,
    useFindAndModify: true, */
    useUnifiedTopology:true
});

const connection = mongoose.connection;

connection.once('open', () => { 
    console.log('DB is connected');
});