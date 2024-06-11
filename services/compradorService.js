import Comprador from "../models/compradorModel.js";

const obtenerCompradoresService = async () => {
    return await Comprador.findAll();
}

const crearCompradorService = async (data) => {
    return await Comprador.create(data);
}

const obtenerCompradorPorIdService = async (id) => {
    return await Comprador.findByPk(id);
}

const actualizarCompradorService = async (id, data) => {
    const comprador = await Comprador.findByPk(id);
    if (comprador) {
        return await comprador.update(data);
    }
    throw new Error('Comprador no encontrado');
}

const eliminarCompradorService = async (id) => {
    const comprador = await Comprador.findByPk(id);
    if (comprador) {
        return await comprador.destroy();
    }
    throw new Error('Comprador no encontrado');
}

export {
    obtenerCompradoresService,
    crearCompradorService,
    obtenerCompradorPorIdService,
    actualizarCompradorService,
    eliminarCompradorService
};