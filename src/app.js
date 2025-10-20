import express from "express";
import cors from "cors";
import morgan from 'morgan';
import clientesRoutes from "./routes/clientes.routes.js";
import facturasRoutes from "./routes/facturas.routes.js";



const app = express();

app.use(morgan('dev'));

app.use(express.json());

app.use(cors());

app.use('/api/clientes', clientesRoutes);
app.use('/api/facturas', facturasRoutes);

export default app;
