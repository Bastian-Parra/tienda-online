import express from "express";
import tipoProductoController from "../controllers/tipoProductoController.js";

const router = express.Router();

router.get('/obtenerTipoProductos', tipoProductoController.obtenerTiposProductos)
router.get('/obtenerTipoProducto/:id', tipoProductoController.obtenerTipoProducto)
router.post('/crearTipoProducto', tipoProductoController.crearNuevoProducto)
router.put('/actualizarTipoProducto', tipoProductoController.actualizarTipoProducto)
router.delete('/eliminarTipoProducto', tipoProductoController.eliminarTipoProducto)

export default router;