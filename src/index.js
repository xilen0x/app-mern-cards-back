require('dotenv').config();//para q carguen las variables de entorno del archivo .env
const app = require('./app'); //importo nuestro app creado.
require('./database');

async function main() {
    //iniciamos el server que escuchará el puerto(port) configurado en mi app.js
    await app.listen(app.get('port'));
        console.log(`server on port ${port}`);  
}

main();