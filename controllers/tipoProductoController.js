import tipoProductoService from "../services/tipoProductoService.js";

const tipoProductoController = {
    async obtenerTiposProductos(req, res) {
        try {
            const tiposProductos = await tipoProductoService.obtenerTiposProductos()
            res.status(201).json(tiposProductos)
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },

    async obtenerTipoProducto(req, res) {
        try {
            const tipoProducto = await tipoProductoService.obtenerTipoProducto(req.params.id)
            res.status(201).json(tipoProducto)
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }, 

    async crearNuevoProducto(req, res) {
        try {
            const nuevoTipoProducto = tipoProductoService.crearNuevoTipoProducto(req.body)
            res.status(201).json({ message: "Producto creado con éxito", nuevoTipoProducto });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },

    async actualizarTipoProducto(req, res) {
        try {
            await tipoProductoService.actualizarTipoProducto(req.params.id, req.body)
            res.status(204).json({ mensaje: "Tipo de producto actualizado" })
        } catch (error) {
            res.status(500).json({ error: error.message })
        }
    },

    async eliminarTipoProducto(req, res) {
        try {
            await tipoProductoService.eliminarTipoProducto(req.params.id)
            res.status(204).json({ mensaje: "Tipo de producto eliminado" })
        } catch (error) {
            res.status(500).json({ error: error.message })
        }
    }
}

export default tipoProductoController