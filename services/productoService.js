import Producto from "../models/productoModel"

const obtenerProductosService = async (req, res) => {
    const productos = await Producto.findAll()
    return productos
}

const eliminarProductoService = async (req, res) => {
    const { idProducto } = req.params // 1
    const producto = await Producto.findAll(
        
    )
    await producto.destroy()
}

export default obtenerProductosService