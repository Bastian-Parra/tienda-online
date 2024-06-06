import express from 'express';
import bodyParser from 'body-parser'

const app = express();

app.use(bodyParser.json()); // esto es para que podamos utilizar solicitudes tipo JSON

const PORT = process.env.PORT || 3000; // puerto en el que vamos a ejecutar el server de express (el process.env.PORT es que lee las variables de entorno y busca un puerto disponible)

// se inicia el servidor express
app.listen(PORT, () => {
    console.log('Servidor en linea: Puerto 3000');
})