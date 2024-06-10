import Producto from '../models/productoModel.js'
import obtenerProductosService from '../services/productoService.js';
export const crearProducto = async (req, res) => {
    const { numeroVendedor, idComprador, idTipoProducto, precioCompra } = req.body;

    try {
        await Producto.create({
            numeroVendedor: numeroVendedor,
            idComprador: idComprador,
            idTipoProducto: idTipoProducto,
            precioCompra: precioCompra
        })

        res.status(201).json({ message: "Producto creado con éxito" })
    } catch (error) {
        res.status(500).json({ message: "Error al crear el producto" })
        console.log("ERROR! ", error)
    }
}

export const obtenerProductos = (req, res) => {
    try {
        const productos = obtenerProductosService()
        res.status(200).json(productos)
    } catch (error) {
        res.status(500).json({ message: "Error al obtener los productos" })
        console.log("ERROR! ", error)
    }
}