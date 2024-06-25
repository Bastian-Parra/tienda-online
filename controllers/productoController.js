import Producto from '../models/productoModel.js'
import ProductoService from '../services/productoService.js';
import TipoProducto from '../models/tipoProductoModel.js';
const ProductoController = {
    async obtenerProductos(req, res) {
        try {

            const productos = await ProductoService.obtenerProductos() // llamamos al servicio de productos para obtener los productos
            res.render('productos/lista', { productos })

        } catch (error) {
            res.status(500).json({message: error.message })
        }
    },

    async crearNuevoProducto(req, res) {
        const { descripcionProducto, precioCompra, numeroVendedor, idComprador } = req.body;

        try {
            // verificamos si no hay un tipo de producto con el mismo nombre
            let tipoProducto = await TipoProducto.findOne({ where: { descripcionProducto } });

            // si no existe el tipo de producto, lo creamos
            if (!tipoProducto) {
                tipoProducto = await TipoProducto.create({ descripcionProducto });
            }

            // Crear el nuevo producto
            await ProductoService.crearProducto(numeroVendedor, precioCompra, tipoProducto.idTipoProducto, idComprador);
            res.redirect('/productos/mostrarFormularioCrear?message=Producto creado con éxito&type=success');
        } catch (error) {
            res.redirect(`/productos/mostrarFormularioCrear?message=${encodeURIComponent(error.message)}&type=error`);
        }
    },

    async mostrarFormularioCrear(req, res) {
        try {
            const tipo = req.query.type
            const mensaje = req.query.message
            res.render('productos/crear', {tipo, mensaje})
        } catch (error) {
            res.status(500).json({message: error.message})
        }
    },

    async obtenerProducto(req, res) {
        try {
            const idProducto = req.params.id // obtenemos el id del producto que queremos obtener
            const producto = await ProductoService.obtenerUnProducto(idProducto)
            res.render('productos/detalle', { producto }) // renderizamos el detalle del producto (falta por implementar)
        } catch (error) {
            res.status(500).json({ error: error.message })
        }
    },

    async actualizarProducto(req, res) {
        try {
            await ProductoService.actualizarProducto(req.params.id, req.body)
            res.status(204).json({ mensaje: "Producto actualizado" })
        } catch (error) {
            res.status(500).json({ error: error.message })
        }
    },

    async eliminarProducto(req, res) {
        try {
            await ProductoService.eliminarProducto(req.params.id)
            res.status(204).json({ mensaje: "Producto eliminado" })
        } catch (error) {
            res.status(500).json({ error: error.message })
        }
    }
}

export default ProductoController