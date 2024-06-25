import express from 'express';
import VendedorController from '../controllers/vendedorController.js';

const router = express.Router();

router.get('/obtenerVendedores', VendedorController.obtenerVendedores)
router.get('/obtenerVendedor/id', VendedorController.obtenerVendedor)
router.post('/crearVendedor', VendedorController.crearVendedor)
router.put('/actualizarVendedor/:id', VendedorController.actualizarVendedor)
router.delete('/eliminarVendedor/:id', VendedorController.eliminarVendedor)
router.get('/mostrarFormularioCrear', VendedorController.mostrarFormularioCrear)

export default router;
