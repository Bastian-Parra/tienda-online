import TipoProducto from "../models/tipoProductoModel";

const getAllTiposProducto = async () => {
    return await TipoProducto.findAll();
};

const getTipoProductoById = async (id) => {
    return await TipoProducto.findByPk(id);
};

const createTipoProducto = async (data) => {
    return await TipoProducto.create(data);
};

const updateTipoProducto = async (id, data) => {
    const tipoProducto = await TipoProducto.findByPk(id);
    if (tipoProducto) {
        return await tipoProducto.update(data);
    }
    return null;
};

const deleteTipoProducto = async (id) => {
    const tipoProducto = await TipoProducto.findByPk(id);
    if (tipoProducto) {
        await tipoProducto.destroy();
        return true;
    }
    return false;
};

export default {
    getAllTiposProducto,
    getTipoProductoById,
    createTipoProducto,
    updateTipoProducto,
    deleteTipoProducto
};