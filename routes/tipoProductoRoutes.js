import express from "express";
import tipoProductoController from "../controllers/tipoProductoController";

const router = express.Router();

router.get("/", tipoProductoController.getAllTiposProducto);
router.get("/:id", tipoProductoController.getTipoProductoById);
router.post("/", tipoProductoController.createTipoProducto);
router.put("/:id", tipoProductoController.updateTipoProducto);
router.delete("/:id", tipoProductoController.deleteTipoProducto);

export default router;