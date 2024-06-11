import { Router } from 'express';
import {
    crearComprador,
    obtenerCompradores,
    obtenerCompradorPorId,
    actualizarComprador,
    eliminarComprador
} from '../controllers/compradorController.js';

const router = Router();

router.post('/compradores', crearComprador);
router.get('/compradores', obtenerCompradores);
router.get('/compradores/:id', obtenerCompradorPorId);
router.put('/compradores/:id', actualizarComprador);
router.delete('/compradores/:id', eliminarComprador);

export default router;