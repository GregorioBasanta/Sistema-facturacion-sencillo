import { abonos as AbonosMock } from "../data/abonos.mock.js";

export class AbonosService{
    constructor(){
        this.abonos = AbonosMock;
    }

    async getAbonosById(id){
        const abono = this.abonos.find(a => a.id === id);

        if(!abono){
            const error = new Error(`Abono con id ${id} no encontrado`);
            error.code = 404;
            throw error;
        }
        return abono;
    }
}