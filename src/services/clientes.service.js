import { ClienteModel } from "../models/cliente.model.js"
import { clientes as clientesMock } from "../data/clientes.mock.js";

export class ClientesService{
    constructor() {
        this.clientes = clientesMock;
    }

    async getClientes() {
        return this.clientes;
    }

    async getClientesById(id) {
        const cliente = this.clientes.find(c => c.id == id);
        if (!cliente) {
            const error = new Error(`Cliente con id ${id} no encontrado`);
            error.code = 404;
            throw error;
        }
        return cliente;
    }

    async postClientes(body){
        const newId = this.clientes.length + 1;

        const cliente = new ClienteModel(
            newId,
            body.nombre,
            body.apellido,
            body.dni,
            body.cuil,
            body.direccion
        );
        this.clientes.push(cliente);
        console.table(this.clientes);
        return cliente;
    }

    async putClientes(id, body){
        const cliente = this.clientes.find(c => c.id === id);
        if (!cliente) {
            const error = new Error("Cliente no encontrado");
            error.code = 404;
            throw error;
        }
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