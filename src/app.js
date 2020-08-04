/**
 * Codigo del servidor
 */
const express = require('express');//importamos express y lo guardamos en la variable express.
const cors = require('cors');//modulo q nos permitirá intercambiar datos entre dos servidores.
const app = express();//ejecutamos express y el objeto q devuelve lo guardamos en app.

//settings
app.set('port', process.env.PORT || 4000);//si existe un puerto en las var.de.entorno úselo, de lo contrario utilice el 4000.

//middlewares - estas son funciones q se ejecutan antes q lleguen a las routes
app.use(cors());// para q c/vez q llegue una petición al servidor, éste pueda enviar y recibir datos
app.use(express.json());//y esos son los tipos de datos que trabajará(json).

//routes
app.get('/', (req, res) => res.send(`<h1>'Estás en la raiz!'</h1>`))
/*app.get('/api/users', (req, res) => res.send('Users Routes'))
app.get('/api/notes', (req, res) => res.send('Notes Routes')) */
app.use('/api/users', require('./routes/users'))//llamamos a la ruta creada en el archivo users.js y lo mismo con notes.
app.use('/api/notes', require('./routes/notes'))


module.exports = app;//exporto mi servidor app, ya q en este archivo solo estoy definiendo mi servidor, pero será en index.js que lo inicializaremos.