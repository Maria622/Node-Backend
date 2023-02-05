const express = require('express');
const { dbConnection } = require('./db/config');
const cors = require('cors');
require('dotenv').config();



//creaar el servidor de exprres
const app  = express();


//Base de datos
dbConnection();

//CORS
app.use(cors())




//Directorio Publico

//use es conocido en express como un midleware, un midelware es una funcion que se ejecuta en el momento en que alguien hace una peticion
app.use(express.static('public'));


//Lectura y parseo del body
app.use(express.json());

//Rutas
//lo va habilitar en la ruta auth
app.use('/api/auth', require('./routes/auth'));
app.use('/api/events', require('./routes/events'));

//CRUD: Eventos





// Escuchar peticiones
app.listen( process.env.PORT, () => {
    console.log(`Servidor corriendo en puerto ${ process.env.PORT }`);
});