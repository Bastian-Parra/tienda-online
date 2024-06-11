import { Router } from 'express';
import compradorController from '../controllers/compradorController.js';

const router = Router();

router.post('/compradores', compradorController.crearComprador);
router.get('/compradores', compradorController.obtenerCompradores);
router.get('/compradores/:id', compradorController.obtenerCompradorPorId);
router.put('/compradores/:id', compradorController.actualizarComprador);
router.delete('/compradores/:id', compradorController.eliminarComprador);

export default router;