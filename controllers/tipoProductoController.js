import tipoProductoService from "../services/tipoProductoService";

const getAllTiposProducto = async (req, res) => {
    try {
        const tiposProducto = await tipoProductoService.getAllTiposProducto();
        res.json(tiposProducto);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getTipoProductoById = async (req, res) => {
    try {
        const tipoProducto = await tipoProductoService.getTipoProductoById(req.params.id);
        if (tipoProducto) {
            res.json(tipoProducto);
        } else {
            res.status(404).json({ message: "Tipo de producto no encontrado" });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const createTipoProducto = async (req, res) => {
    try {
        const newTipoProducto = await tipoProductoService.createTipoProducto(req.body);
        res.status(201).json(newTipoProducto);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const updateTipoProducto = async (req, res) => {
    try {
        const updatedTipoProducto = await tipoProductoService.updateTipoProducto(req.params.id, req.body);
        if (updatedTipoProducto) {
            res.json(updatedTipoProducto);
        } else {
            res.status(404).json({ message: "Tipo de producto no encontrado" });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const deleteTipoProducto = async (req, res) => {
    try {
        const deleted = await tipoProductoService.deleteTipoProducto(req.params.id);
        if (deleted) {
            res.status(204).send();
        } else {
            res.status(404).json({ message: "Tipo de producto no encontrado" });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export default {
    getAllTiposProducto,
    getTipoProductoById,
    createTipoProducto,
    updateTipoProducto,
    deleteTipoProducto
};
