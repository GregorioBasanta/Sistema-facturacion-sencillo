import { Router } from "express";
import { FacturasController } from "../controllers/facturas.controller.js";

const router = Router();
const facturasController = new FacturasController();

router.get("/", facturasController.getFacturas);
router.get('/:id', facturasController.getFacturasById);

router.post("/", facturasController.postFacturas);

router.put("/:id", facturasController.putFacturas);

router.delete("/:id", facturasController.deleteFacturas);

export default router;
