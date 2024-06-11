import express from 'express'
import ProductoController from '../controllers/productoController.js'

const router = express.Router()

// rutas para listar productos
router.get('/obtenerProductos', ProductoController.obtenerProductos)
router.get('/obtenerProducto/:id', ProductoController.obtenerProducto)
router.get('/mostrarFormularioCrear', ProductoController.mostrarFormularioCrear)
router.post('/crearProducto', ProductoController.crearNuevoProducto)
export default router