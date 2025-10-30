import { ClienteModel } from "../models/cliente.model.js"
import { clientes as clientesMock } from "../data/clientes.mock.js";
import { AbonosService }  from "../services/abonos.service.js";
import { FacturasService } from "../services/facturas.service.js";


export class ClientesService{
    constructor() {
        this.clientes = clientesMock;
        this.facturasService = new FacturasService();
        this.nextId = this.clientes.length + 1;
    }

    async getClientes() {
        return this.clientes;
    }

    async getClientesById(id) {
        const cliente = this.clientes.find(c => c.id === id);
        if (!cliente) {
            const error = new Error(`Cliente con id ${id} no encontrado`);
            error.code = 404;
            throw error;
        }
        return cliente;
    }

    async getFacturasForClientes(id) {
        const cliente = this.clientes.find(c => c.id === id);
        if (!cliente) {
            const error = new Error(`Cliente con id ${id} no encontrado`);
            error.code = 404;
            throw error;
        }

        //Busco todas las facturas
        const facturas = await this.facturasService.getFacturas();
        
        //Filtro las facturas del cliente que solicite
        const facturasDelCliente = facturas.filter(f => f.cliente.id === id);

        if (facturasDelCliente.length === 0) {
            const error = new Error(`No se encontraron facturas para el cliente con id ${id}`);
            error.code = 404;
            throw error;
        }

        return facturasDelCliente;
    }

    async postClientes(body){
        const abonoService = new AbonosService();
        const id = parseInt(body.abono);
        const abono = await abonoService.getAbonosById(id);

        const cliente = new ClienteModel(
            this.nextId++,
            body.nombre,
            body.apellido,
            body.dni,
            body.cuil,
            body.direccion,
            abono
        );
        this.clientes.push(cliente);
        console.table(this.clientes);

        if(!cliente){
            const error = new Error("Cliente no encontrado");
            error.code = 404;
            throw error;
        }
        return cliente;
    }

    async putClientes(id, body){
        const cliente = this.clientes.find(c => c.id === id);
        if (!cliente) {
            const error = new Error("Cliente no creado");
            error.code = 404;
            throw error;
        }
        const abonoService = new AbonosService();
        const abonoId = parseInt(body.abono);
        body.abono = await abonoService.getAbonosById(abonoId);

        if (body.id) delete body.id;
        Object.assign(cliente, body);
        return cliente;
    }
    
    async deleteClientes(id){
        //index va a ser -1 si no encuentra el id
        const index = this.clientes.findIndex(c => c.id === id);
        if(index > -1){
            this.clientes.splice(index, 1);
            return {Message: `Cliente con id ${id} eliminado`};
        }
        else{
            const error = new Error("Cliente no encontrado");
            error.code = 404;
            throw error;
        }
    }
}