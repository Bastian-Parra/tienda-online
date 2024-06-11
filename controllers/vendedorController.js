import Vendedor from '../models/vendedorModel.js';
import VendedorService from '../services/vendedorService.js';

const VendedorController = {
    async listarVendedores(req, res) {
        try {
            const listaVendedores = await VendedorService.obtenerTodos();
            res.render('vendedores/lista', { listaVendedores });
        } catch (error) {
            res.status(500).json({ mensaje: error.message });
        }
    },

    async mostrarEstadisticas(req, res) {
        try {
            const estadisticas = await VendedorService.calcularEstadisticas();
            res.render('vendedores/estadisticas', { estadisticas });
        } catch (error) {
            res.status(500).json({ mensaje: error.message });
        }
    },

    async buscarVendedor(req, res) {
        const { nombre } = req.body;

        try {
            const vendedor = await VendedorService.buscarPorNombre(nombre);
            res.render('vendedores/detalle', { vendedor });
        } catch (error) {
            res.status(500).json({ mensaje: error.message });
        }
    },

    async mostrarFormularioBusqueda(req, res) {
        try {
            res.render('vendedores/buscar');
        } catch (error) {
            res.status_500.json({ mensaje: error.message });
        }
    },

    async actualizarNombreVendedor(req, res) {
        try {
            await VendedorService.actualizarNombre(req.params.id, req.body.nuevoNombre);
            res.status(204).json({ mensaje: "Nombre del vendedor actualizado" });
        } catch (error) {
            res.status(500).json({ mensaje: error.message });
        }
    },

    async eliminarVendedor(req, res) {
        try {
            await VendedorService.eliminar(req.params.id);
            res.status(204).json({ mensaje: "Vendedor eliminado" });
        } catch (error) {
            res.status(500).json({ mensaje: error.message });
        }
    }
};

export default VendedorController;
