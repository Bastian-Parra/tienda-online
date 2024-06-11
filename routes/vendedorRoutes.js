import express from 'express';
import VendedorController from '../controllers/vendedorController.js';

const router = express.Router();

router.get('/obtenerVendedores', VendedorController.listarVendedores);
router.get('/obtenerVendedor/:id', VendedorController.obtenerVendedorPorId);
router.get('/mostrarFormularioBusqueda', VendedorController.mostrarFormularioBusqueda);
router.post('/buscarVendedor', VendedorController.buscarVendedor);
router.post('/crearVendedor', VendedorController.agregarVendedor);
router.get('/mostrarEstadisticas', VendedorController.mostrarEstadisticas);
router.put('/actualizarVendedor/:id', VendedorController.actualizarNombreVendedor);r
router.delete('/eliminarVendedor/:id', VendedorController.eliminarVendedor);

export default router;
