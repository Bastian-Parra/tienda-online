import Comprador from "../models/compradorModel.js";

const compradorService = {
    obtenerCompradores: async () => {
        return await Comprador.findAll();
    },

    crearComprador: async (data) => {
        return await Comprador.create(data);
    },

    obtenerCompradorPorId: async (id) => {
        return await Comprador.findByPk(id);
    },

    actualizarComprador: async (id, data) => {
        const comprador = await Comprador.findByPk(id);
        if (comprador) {
            return await comprador.update(data);
        }
        throw new Error('Comprador no encontrado');
    },

    eliminarComprador: async (id) => {
        const comprador = await Comprador.findByPk(id);
        if (comprador) {
            return await comprador.destroy();
        }
        throw new Error('Comprador no encontrado');
    }
};

export default compradorService;