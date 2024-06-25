import { Router } from 'express';
import CompradorController from '../controllers/compradorController.js';

const router = Router();

router.get('/obtenerCompradores', CompradorController.obtenerCompradores);
router.get('/obtenerUnComprador/:id', CompradorController.obtenerComprador);
router.post('/crearComprador', CompradorController.crearNuevoComprador);
router.put('/actualizarComprador/:id', CompradorController.actualizarComprador);
router.delete('/eliminarComprador/:id', CompradorController.eliminarComprador);
router.get('/mostrarFormularioCrear', CompradorController.mostrarFormularioCrear)


export default router;