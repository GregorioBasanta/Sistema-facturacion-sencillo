import { FacturasService } from "../services/facturas.service.js";

export class FacturasController {
  constructor() {
    this.facturasService = new FacturasService();
  }

  getFacturas = async (req, res) => {
    try {
        console.log("Facturas");
      const responseBody = await this.facturasService.getFacturas();
      res.status(200).json(responseBody);
      console.log(responseBody);
    } 
    catch (error) {
      res.status(500).json({ message: "Error al obtener las facturas" });
    }
  }

  getFacturasById = async (req, res) => {
    try {
      console.log(req.params.id);
      const id = parseInt(req.params.id);
      const responseBody = await this.facturasService.getFacturasById(id);
      console.log(responseBody);

      if (!responseBody) {
        return res.status(404).json({ message: "Factura no encontrada" });
      }

      res.status(200).json(responseBody);
    } 
    catch (error) {
      this.manejarErrores(res, error);
    }
  };

  postFacturas = async (req, res) => {
    try {
      const responseBody = await this.facturasService.postFacturas(req.body);
      res.status(201).json(responseBody);;
      console.log(responseBody);
    } 
    catch (error) {
      res.status(500).json({ message: "Error al obtener las facturas" });
    }
  }

  deleteFacturas = async(req, res) => {
    try{
      const id = parseInt(req.params.id);
      await this.facturasService.deleteFacturas(id);
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