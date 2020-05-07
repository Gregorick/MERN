require('dotenv').config();
const app = require('./app');
const { mongoose } =  require('./database');

async function main() {
    await app.listen(app.get('port'))
    console.log(`Servidor conectado al puerto ${app.get('port')}`);
}


// INICIALIZAR SERVIDOR
main()