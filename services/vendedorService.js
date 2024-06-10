import Vendedor from "../models/vendedorModel";

const obtenerVendedoresService = async () => {
    const vendedores = await Vendedor.findAll();
    return vendedores;
};

const eliminarVendedorService = async (numeroVendedor) => {
    try {
        const vendedor = await Vendedor.findOne({ where: { numeroVendedor: numeroVendedor } });
        if (vendedor) {|
            await vendedor.destroy();
            return { success: true, message: "Vendedor eliminado con éxito" };
        } else {
            return { success: false, message: "Vendedor no encontrado" };
        }
    } catch (error) {
        console.log("ERROR! ", error);
        return { success: false, message: "Error al eliminar el vendedor" };
    }
};

export { obtenerVendedoresService, eliminarVendedorService };
