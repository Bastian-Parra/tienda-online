import Vendedor from "../models/vendedorModel.js";


const VendedorService = {
   async obtenerVendedores() {
        try {
            const vendedores = await Vendedor.findAll()
            return vendedores
        } catch (error) {
            throw new Error("Error al mostrar los vendedores")
        }
   },

   async obtenerVendedor(idVendedor) {
       try {
           const vendedor = await Vendedor.findByPk(idVendedor)
           return vendedor
       } catch (error) {
           throw new Error("Error al mostrar el vendedor")
       }
   },

   async crearVendedor(nombreVendedor) {
    try {
        const nuevoVendedor = await Vendedor.create(nombreVendedor)
        return nuevoVendedor
    } catch (error) {
        throw new Error("Error al crear el vendedor")
    }
},

   async eliminarVendedor(idVendedor) {
       try {
           const vendedor = await Vendedor.findByPk(idVendedor)

           if (!vendedor) {
               throw new Error("Vendedor no encontrado")
           }

           await vendedor.destroy()
       } catch (error) {
           throw new Error("Error al eliminar el vendedor")
       }
   },

   async actualizarVendedor(idVendedor, nombreVendedor) {
        try {
            const vendedor = await Vendedor.findByPk(idVendedor)

            if(!vendedor) {
                throw new Error("Vendedor no encontrado")
            }

            await vendedor.update({ nombreVendedor: nombreVendedor })
        } catch (error) {
            throw new Error("Error al actualizar el vendedor")
        }
   }
};

export default VendedorService
