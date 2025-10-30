import { ClientesService } from "../services/clientes.service.js";

export class ClientesController {
  constructor() {
    this.clientesService = new ClientesService();

  }

  getClientes = async (req, res) => {
    try {
      const responseBody = await this.clientesService.getClientes();
      res.status(200).json(responseBody);
      console.log(responseBody);
    } 
    catch (error) {
      res.status(500).json({ message: "Error al obtener clientes" });
    }
  }

  getClientesById = async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const responseBody = await this.clientesService.getClientesById(id);
      
      res.status(200).json(responseBody);
    } 
    catch (error) {
      this.manejarErrores(res, error);
    }
  };

  getFacturasForClientes = async(req, res) => {
    console.log("entre a getFacturasForClientes");  
    try {
      const id = parseInt(req.params.id);
      const responseBody = await this.clientesService.getFacturasForClientes(id);
      console.log(responseBody);

      res.status(200).json(responseBody);
    } 
    catch (error) {
      this.manejarErrores(res, error);
    }
  }

  postClientes = async (req, res) => {
    try {
      const responseBody = await this.clientesService.postClientes(req.body);
      res.status(201).json(responseBody);;
      console.log(responseBody);
    } 
    catch (error) {
      this.manejarErrores(res, error);
    }
  }

  putClientes = async (req, res) => {
    try{
      const id = parseInt(req.params.id);
      const responseBody = await this.clientesService.putClientes(id, req.body);
      console.log(responseBody);
      res.status(200).json(responseBody);      
    }
    catch (error) {
      this.manejarErrores(res, error);
    }
  }

  deleteClientes = async(req, res) => {
    try{
      const id = parseInt(req.params.id);
      await this.clientesService.deleteClientes(id);
      res.status(204).send();
    }
    catch (error) {
      this.manejarErrores(res, error);
    }
  }

  manejarErrores(res, error){
    switch (error.code) {
      case 404:
        res.status(404).json({ message: error.message });
        break;
        default:
        res.status(500).json({ message: "Error interno del servidor" });
    }
  }
}