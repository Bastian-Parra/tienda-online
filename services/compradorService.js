import Comprador from "../models/compradorModel.js";

const CompradorService = {
    
    async obtenerCompradores() {
        try {
            const compradores = await Comprador.findAll();
            return compradores
        } catch (error) {
            console.error("Error al obtener los compradores", error.message)
            throw new Error("Error al obtener los compradores")
        }
    },

    async obtenerUnComprador(idComprador) {
        try {
            const comprador = await Comprador.findByPk(idComprador)
            return comprador
        } catch (error) {
            console.error("Error al obtener el comprador", error.message)
            throw new Error("Error al obtener el comprador")
        }
    },

    async crearComprador(nombreComprador) {
        try {
            const nuevoComprador = await Comprador.create(nombreComprador)
            return nuevoComprador
        } catch (error) {
            throw new Error("Error al crear el comprador")
        }
    },

    async actualizarComprador(idComprador, nombreComprador) {
        try {
            const comprador = await Comprador.findOne(
                {
                    where: { idComprador: idComprador },
                    include: [
                        {
                            model: Comprador,
                            attributes: ["nombreComprador"]
                        }
                    ]
                }
            )
            await comprador.update(nombreComprador)

        } catch (error) {
            throw new Error("")
        }
    },

    async eliminarComprador(idComprador) {
        try {
            const comprador = await Comprador.findByPk(idComprador);
            
            if(!comprador) {
                throw new Error("Comprador no encontrado")
            }

            comprador.destroy()

        } catch (error) {
            throw new Error('Comprador no encontrado');
        }
    }
}

export default CompradorService