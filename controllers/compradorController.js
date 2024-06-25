
import CompradorService from "../services/compradorService.js";
import TipoProducto from "../models/tipoProductoModel.js"

const CompradorController = {
   async obtenerCompradores(req, res) {
        try {
            const compradores = await CompradorService.obtenerCompradores()
            res.render('comprador/lista', {compradores})
        } catch (error) {
            res.status(500).json({ error: error.message })
        }
   },

   async crearNuevoComprador(req, res) {

    const nombreComprador = req.body

        try {
            await CompradorService.crearComprador(nombreComprador)
            res.redirect('/comprador/mostrarFormularioCrear?message=Comprador creado con éxito&type=success');
        } catch (error) {
            res.redirect(`/comprador/mostrarFormularioCrear?message=${encodeURIComponent(error.message)}&type=error`);
        }
   },

   async obtenerComprador(req, res) {

    const idComprador = req.params.id

        try {
            await CompradorService.obtenerUnComprador(idComprador)
            res.status(200).json({message: "Comprador creado con éxito"})
        } catch (error) {
            res.status(500).json({ error: error.message })
        }
   },

   async actualizarComprador(req, res) {
        try {
            await CompradorService.actualizarComprador(req.params.id)
            res.status(204).json({ mensaje: "Comprador actualizado" })
        } catch (error) {
            res.status(500).json({ error: error.message })
        }
   },

   async eliminarComprador(req, res) {
    try {
        await CompradorService.eliminarComprador(req.params.id)
        res.status(204).json({ mensaje: "Comprador eliminado" })
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
   },

   async mostrarFormularioCrear(req, res) {
    try {
        const mensaje = req.query.message
        const tipo = req.query.type
        res.render('comprador/crear', { mensaje, tipo})
    } catch (error) {
        res.status(500).json({message: error.message})
    }
},

}

export default CompradorController
