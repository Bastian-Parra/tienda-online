import express, { Router } from 'express';
import bodyParser from 'body-parser'
import DBConnection from './config/database.js';

// rutas
import RouterComprador from './routes/compradorRoutes.js'
import RouterProductos from './routes/productoRoutes.js'


const app = express();
const PORT = process.env.PORT || 3000; // puerto en el que vamos a ejecutar el server de express (el process.env.PORT es que lee las variables de entorno y busca un puerto disponible)

app.set('view engine', 'ejs') // configuramos el motor de plantillas (EJS)

app.set('views', './views') // configuramos el directorio para las vistas

app.use(bodyParser.json()); // esto es para que podamos utilizar solicitudes tipo JSON
app.use(bodyParser.urlencoded({ extended: true })); //)

// si una ruta no es encontrada podemos hacer que haya un mensaje por defecto

// manejamos cualquier posible error que de el servidor creando un middleware (basicamente es algo que se ejecuta cuando ocurre un evento de error del sv)
app.use((error, req, res, next) => {
    console.error(error.stack)
    res.status(500).json({ mensaje: "Error del servidor" })
})

// ==== uso de rutas ====
app.use('/compradores', RouterComprador)
app.use('/productos', RouterProductos)
// ======================

// se sincronizan los modelos de sequelize con la base de datos y luego se inicia el servidor
DBConnection.sync().then(() => {
    app.listen(PORT, () => { console.log('Servidor en linea en el puerto: ', PORT) })
}).catch(error => { console.error("Error al sincronizar la base de datos:", error) })
