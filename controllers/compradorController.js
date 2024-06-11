import compradorService from '../services/compradorService.js';

const compradorController = {
    crearComprador: async (req, res) => {
        try {
            const comprador = await compradorService.crearComprador(req.body);
            res.status(201).json(comprador);
        } catch (error) {
            res.status(500).json({ message: "Error al crear el comprador" });
            console.log("ERROR! ", error);
        }
    },

    obtenerCompradores: async (req, res) => {
        try {
            const compradores = await compradorService.obtenerCompradores();
            res.status(200).json(compradores);
        } catch (error) {
            res.status(500).json({ message: "Error al obtener los compradores" });
            console.log("ERROR! ", error);
        }
    },

    obtenerCompradorPorId: async (req, res) => {
        try {
            const comprador = await compradorService.obtenerCompradorPorId(req.params.id);
            if (comprador) {
                res.status(200).json(comprador);
            } else {
                res.status(404).json({ message: "Comprador no encontrado" });
            }
        } catch (error) {
            res.status(500).json({ message: "Error al obtener el comprador" });
            console.log("ERROR! ", error);
        }
    },

    actualizarComprador: async (req, res) => {
        try {
            const comprador = await compradorService.actualizarComprador(req.params.id, req.body);
            res.status(200).json(comprador);
        } catch (error) {
            res.status(500).json({ message: "Error al actualizar el comprador" });
            console.log("ERROR! ", error);
        }
    },

    eliminarComprador: async (req, res) => {
        try {
            await compradorService.eliminarComprador(req.params.id);
            res.status(204).end();
        } catch (error) {
            res.status(500).json({ message: "Error al eliminar el comprador" });
            console.log("ERROR! ", error);
        }
    }
};

export default compradorController;