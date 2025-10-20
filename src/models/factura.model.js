export class FacturaModel{
    /*constructor(id, clienteId, fecha, monto = 0) {
        this.id = id;
        this.clienteId = clienteId;
        this.fecha = fecha;
        this.monto = monto;
    }*/

    constructor(id, cliente, fecha, monto = 0) {
        this.id = id;
        this.cliente = cliente;
        this.fecha = fecha;
        this.monto = monto;
    }
}