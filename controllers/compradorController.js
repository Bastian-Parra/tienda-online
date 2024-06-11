import {
    obtenerCompradoresService,
    crearCompradorService,
    obtenerCompradorPorIdService,
    actualizarCompradorService,
    eliminarCompradorService
} from '../services/compradorService.js';

export const crearComprador = async (req, res) => {
    try {
        const comprador = await crearCompradorService(req.body);
        res.status(201).json(comprador);
    } catch (error) {
        res.status(500).json({ message: "Error al crear el comprador" });
        console.log("ERROR! ", error);
    }
}

export const obtenerCompradores = async (req, res) => {
    try {
        const compradores = await obtenerCompradoresService();
        res.status(200).json(compradores);
    } catch (error) {
        res.status(500).json({ message: "Error al obtener los compradores" });
        console.log("ERROR! ", error);
    }
}

export const obtenerCompradorPorId = async (req, res) => {
    try {
        const comprador = await obtenerCompradorPorIdService(req.params.id);
        if (comprador) {
            res.status(200).json(comprador);
        } else {
            res.status(404).json({ message: "Comprador no encontrado" });
        }
    } catch (error) {
        res.status(500).json({ message: "Error al obtener el comprador" });
        console.log("ERROR! ", error);
    }
}

export const actualizarComprador = async (req, res) => {
    try {
        const comprador = await actualizarCompradorService(req.params.id, req.body);
        res.status(200).json(comprador);
    } catch (error) {
        res.status(500).json({ message: "Error al actualizar el comprador" });
        console.log("ERROR! ", error);
    }
}

export const eliminarComprador = async (req, res) => {
    try {
        await eliminarCompradorService(req.params.id);
        res.status(204).end();
    } catch (error) {
        res.status(500).json({ message: "Error al eliminar el comprador" });
        console.log("ERROR! ", error);
    }
}