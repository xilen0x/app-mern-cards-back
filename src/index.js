const app = require('./app'); //importo nuestro app creado.

async function main() {
    //iniciamos el server
    await app.listen(4000);
        console.log('server on port 4000');  
}

main();