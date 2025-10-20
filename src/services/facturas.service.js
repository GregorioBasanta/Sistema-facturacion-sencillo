import { FacturaModel } from "../models/factura.model.js"
import { facturas as FacturasMock } from "../data/facturas.mock.js";
import { ClientesService }  from "./clientes.service.js";

export class FacturasService{
    constructor() {
        this.facturas = FacturasMock;
    }

    async getFacturas() {
        console.log(this.facturas);
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
        const newId = this.facturas.length + 1;
        const clienteService = new ClientesService();
        const id = parseInt(body.clienteId);
        const cliente = clienteService.clientes.find(c => c.id === id);

        const factura = new FacturaModel(
            newId,
            cliente,
            body.fecha,
            body.monto
        );
        this.facturas.push(factura);
        console.table(this.facturas);
        return factura;
    }

    async putFacturas(id, body){
        const factura = this.facturas.find(c => c.id === id);
        if (!factura) {
            const error = new Error("Factura no encontrado");
            error.code = 404;
            throw error;
        }
        Object.assign(factura, body);
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