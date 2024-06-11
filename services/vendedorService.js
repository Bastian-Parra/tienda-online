import Vendedor from "../models/vendedorModel.js";
import Producto from "../models/productoModel.js";


const VendedorService = {
    async obtenerVendedores() {
        try {
            console.log("Intentando obtener vendedores");
            const vendedores = await Vendedor.findAll({
                include: [
                    {
                        model: Producto,
                        attributes: ["precioCompra", "idTipoProducto"]
                    }
                ]
            });
            console.log("Vendedores obtenidos:", vendedores);
            return vendedores;
        } catch (error) {
            console.error("Error al obtener vendedores:", error.message);
            throw new Error("Error al obtener los vendedores");
        }
    },

    async crearVendedor(nombreVendedor) {
        try {
            const nuevoVendedor = await Vendedor.create({
                nombreVendedor
            });
            return nuevoVendedor;
        } catch (error) {
            throw new Error("Error al crear el vendedor");
        }
    },

    async obtenerUnVendedor(idVendedor) {
        try {
            const vendedor = await Vendedor.findOne({
                where: { numeroVendedor: idVendedor },
                include: [
                    {
                        model: Producto,
                        attributes: ["precioCompra", "idTipoProducto"]
                    }
                ]
            });

            if (!vendedor) {
                throw new Error("Vendedor no encontrado");
            }

            return vendedor;
        } catch (error) {
            throw new Error("Error al obtener un vendedor por ID");
        }
    },

    async actualizarVendedor(idVendedor, nuevosDatos) {
        try {
            const vendedor = await Vendedor.findByPk(idVendedor);

            if (!vendedor) {
                throw new Error("Vendedor no encontrado");
            }

            await vendedor.update(nuevosDatos);
        } catch (error) {
            throw new Error("Error al actualizar el vendedor");
        }
    },

    async eliminarVendedor(idVendedor) {
        try {
            const vendedor = await Vendedor.findByPk(idVendedor);

            if (!vendedor) {
                throw new Error("Vendedor no encontrado");
            }

            await vendedor.destroy();
        } catch (error) {
            throw new Error("Error al eliminar el vendedor");
        }
    },

    async calcularEstadisticas() {
        try {
            const vendedores = await Vendedor.findAll({
                attributes: ["numeroVendedor", "nombreVendedor"],
                include: {
                    model: Producto,
                    attributes: ["precioCompra"]
                }
            });

            const estadisticas = vendedores.map(vendedor => {
                const totalProductos = vendedor.Productos.length;
                const totalVentas = vendedor.Productos.reduce((sum, producto) => sum + producto.precioCompra, 0);
                return {
                    nombreVendedor: vendedor.nombreVendedor,
                    totalProductos,
                    totalVentas
                };
            });

            return estadisticas;
        } catch (error) {
            throw new Error("Error al calcular estadísticas");
        }
    }
};

export default VendedorService;
