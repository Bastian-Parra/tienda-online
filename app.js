import express from 'express';
import bodyParser from 'body-parser'
import DBConnection from './config/database.js';

const app = express();

app.use(bodyParser.json()); // esto es para que podamos utilizar solicitudes tipo JSON

const PORT = process.env.PORT || 3000; // puerto en el que vamos a ejecutar el server de express (el process.env.PORT es que lee las variables de entorno y busca un puerto disponible)

// si una ruta no es encontrada podemos hacer que haya un mensaje por defecto
app.use((req, res) => {
    res.status(404).json({ mensaje: "Ruta no encontrada" })
})

// manejamos cualquier posible error que de el servidor creando un middleware (basicamente es algo que se ejecuta cuando ocurre un evento de error del sv)
app.use((error, req, res, next) => {
    console.error(error.stack)
    res.status(500).json({ mensaje: "Error del servidor" })
})

// se sincronizan los modelos de sequelize con la base de datos y luego se inicia el servidor
DBConnection.sync().then(() => {
    app.listen(PORT, () => { console.log('Servidor en linea: Puerto 3000') })
}).catch(error => { console.error("Error al sincronizar la base de datos:", error) })
