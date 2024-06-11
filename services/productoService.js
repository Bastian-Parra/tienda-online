import Producto from "../models/productoModel.js"
import Vendedor from "../models/vendedorModel.js"
import Comprador from "../models/compradorModel.js"
import TipoProducto from "../models/tipoProductoModel.js"
// para el servicio, creamos un objeto donde manejamos las funciones del servicio
const ProductoService = {

    async obtenerProductos() {
        try {
            console.log("intentando obtener productos")
            const productos = await Producto.findAll({
                include: [
                    {
                        model: Vendedor,
                        attributes: ["nombreVendedor"]
                    },
                    {
                        model: Comprador,
                        attributes: ["nombreComprador"]
                    },
                    {
                        model: TipoProducto,
                        attributes: ["descripcionProducto"]
                    }
                ]
            })
            console.log("Productos obtenidos:", productos)
            return productos
        } catch (error) {
            console.error("Error al obtener productos:", error.message)
            throw new Error("Error al obtener los productos")
        }
    },

    async crearProducto(numeroVendedor, precioCompra, idTipoProducto, idComprador) { 
        try {
             const nuevoProducto = await Producto.create({
                numeroVendedor,
                precioCompra,
                idTipoProducto,
                idComprador
             })

             return nuevoProducto

        } catch (error) {
            throw new Error("Error al crear el producto")
        }
    },
    
    async obtenerUnProducto(idProducto) {
        try {
            const producto = await Producto.findOne({
                where: { idTipoProducto: idProducto },
                include: [
                    {
                        model: Vendedor,
                        attributes: ["nombreVendedor"]
                    },
                    {
                        model: Comprador,
                        attributes: ["nombreComprador"]
                    },
                    {
                        model: TipoProducto,
                        attributes: ["descripcionProducto"]
                    }
                ]
            })

            if(!producto) {
                throw new Error("Producto no encontrado")
            }

            return producto
        } catch (error) {
            throw new Error("Error al obtener un producto por ID")
        }
    },

    async actualizarProducto(idProducto, nuevosDatos) {
        
        try {
            const producto = await Producto.findByPk(idProducto, nuevosDatos)

            if(!producto) {
                throw new Error("Producto no encontrado")
            }

            await producto.update(nuevosDatos)

        } catch (error) {
            throw new Error("Error al actualizar el producto")
        }
    },

    async eliminarProducto(idProducto) {
        try {
            const producto = await Producto.findByPk(idProducto)
            
            if(!producto) {
                throw new Error("Producto no encontrado")
            }

            producto.destroy()
            
        } catch (error) {
            throw new Error("Error al eliminar el producto")
        }
    }

}

export default ProductoService