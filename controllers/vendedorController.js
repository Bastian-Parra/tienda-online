import VendedorService from '../services/vendedorService.js';
import Vendedor from '../models/vendedorModel.js';

const VendedorController = {
    async obtenerVendedores(req, res) {
        try {
            const vendedores = await VendedorService.obtenerVendedores()
            res.render('vendedores/lista', { vendedores })
        } catch (error) {
            res.status(500).json({ error: error.message })
        }
    },

    async obtenerVendedor(req,res) {
        try {
            const vendedor = await VendedorService.obtenerVendedor(req.params.id)
            res.status(200).json({ vendedor })
        } catch (error) {
            res.status(500).json({ error: error.message })
        }
    },

    async crearVendedor(req, res) {

        const nombreVendedor = req.body
    
            try {
                await VendedorService.crearVendedor(nombreVendedor)
                res.redirect('/vendedor/mostrarFormularioCrear?message=Vendedor creado con éxito&type=success');
            } catch (error) {
                res.redirect(`/vendedor/mostrarFormularioCrear?message=${encodeURIComponent(error.message)}&type=error`);
            }
       }, 

    async eliminarVendedor(req,res) {
        try {
            await VendedorService.eliminarVendedor(req.params.id)
            res.status(200).json({message: "Vendedor eliminado con éxito"})
        } catch (error) {
            res.status(500).json({ error: error.message })
        }
    },

    async actualizarVendedor(req,res) {
        try {
            await VendedorService.actualizarVendedor(req.params.id, req.body)
            res.status(200).json({message: "Vendedor actualizado con éxito"})
        } catch (error) {
            res.status(500).json({ error: error.message })
        }
    },

    async mostrarFormularioCrear(req, res) {
        try {
            const mensaje = req.query.message
            const tipo = req.query.type
            
            res.render('vendedores/crear', {mensaje, tipo})
        } catch (error) {
            res.status(500).json({message: error.message})
        }
    },
};

export default VendedorController;
