import TipoProducto from "../models/tipoProductoModel.js";

const TipoProductoService = {

    async obtenerTiposProductos() {
        try {
            const tiposProductos = await TipoProducto.findAll()
            return tiposProductos 
        } catch (error) {
            console.error("Error al obtener los tipos de productos", error.message)
            throw new Error("Error al obtener los tipos de productos")
        }
    },

    async obtenerTipoProducto(idTipoProducto) {
        try {
            const producto = await TipoProducto.findByPk(idTipoProducto)
            return producto
        } catch (error) {
            console.error("Error al obtener el Tipo de producto", error.message)
            throw new Error("Error al obtener el Tipo de producto")
        }
    },

    async crearNuevoTipoProducto(descripcionProducto) {
        try {
            const nuevoTipoProducto = await TipoProducto.create(descripcionProducto)
            return nuevoTipoProducto
        } catch (error) {
            throw new Error("Error al crear nuevo Tipo de Producto", error.message)
        }
    },

    async actualizarTipoProducto(idTipoProducto, descripcionProducto) {
        try {

            const tipoProducto = await TipoProducto.findByPk(idTipoProducto)

            await tipoProducto.update({
                descripcionProducto: descripcionProducto
            })
            
        } catch (error) {
            throw new Error("Error al actualizar el Tipo de Producto")
        }
    },

    async eliminarTipoProducto(idTipoProducto) {
        try {
            const tipoProducto = await TipoProducto.findByPk(idTipoProducto);

            if(!tipoProducto) {
                throw new Error("Tipo de producto no encontrado")
            }
            await tipoProducto.destroy();

        } catch (error) {
            throw new Error("Error al eliminar el Tipo de Producto")
        }
    }
}

export default TipoProductoService