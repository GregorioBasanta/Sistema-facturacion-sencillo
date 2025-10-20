export class ClienteModel{
    constructor(id, nombre, apellido, dni, cuil, direccion, abono = null) {
        this.id = id;
        this.nombre = nombre;
        this.apellido = apellido;
        this.dni = dni;
        this.cuil = cuil;
        this.direccion = direccion;
        this.abono = abono; // por ahora puede ser null
    }
}