import { FacturaModel } from '../models/factura.model.js';
import { clientes } from "../data/clientes.mock.js";

export const facturas = [
  new FacturaModel(1, clientes[0], new Date("2025-10-01"), 1200),
  new FacturaModel(2, clientes[1], new Date("2025-10-05"), 850),
];
