import { FacturaModel } from "../models/factura.model.js"
import { facturas as FacturasMock } from "../data/facturas.mock.js";
import { ClientesService }  from "./clientes.service.js";

export class FacturasService{
    constructor() {
        this.facturas = FacturasMock;
        this.nextId = this.facturas.length + 1;
    }

    async getFacturas() {
        return this.facturas;
    }

    async getFacturasById(id) {
        const factura = this.facturas.find(c => c.id == id);
        if (!factura) {
            const error = new Error(`Factura con id ${id} no encontrado`);
            error.code = 404;
            throw error;
        }
        return factura;
    }

    async postFacturas(body){
        const clienteService = new ClientesService();
        const id = parseInt(body.clienteId);
        const cliente = await clienteService.getClientesById(id);
        const monto = cliente.abono.monto;

        const factura = new FacturaModel(
            this.nextId++,
            cliente,
            body.fecha,
            monto
        );
        this.facturas.push(factura);
        return factura;
    }

    async deleteFacturas(id){
        //index va a ser -1 si no encuentra el id
        const index = this.facturas.findIndex(c => c.id === id);
        if(index > -1){
            this.facturas.splice(index, 1);
            return {Message: `Factura con id ${id} eliminado`};
        }
        else{
            const error = new Error("Factura no encontrado");
            error.code = 404;
            throw error;
        }
    }
}