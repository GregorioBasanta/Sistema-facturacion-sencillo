import { Router } from "express";
import { ClientesController } from "../controllers/clientes.controller.js";

const router = Router();
const clientesController = new ClientesController();

router.get("/", clientesController.getClientes);
router.get('/:id', clientesController.getClientesById);
router.get('/:id/facturas', clientesController.getFacturasForClientes);

router.post("/", clientesController.postClientes);

router.put("/:id", clientesController.putClientes);

router.delete("/:id", clientesController.deleteClientes);

export default router;
