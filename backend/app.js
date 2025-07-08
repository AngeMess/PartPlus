import express from "express";
import cookieParser from "cookie-parser";
import clientesRoutes from "./src/routes/cliente.js";
import reservasRoutes from "./src/routes/reserva.js"
import swaggerUi from "swagger-ui-express"
import fs from "fs"
import path from "path"
import cors from "cors"

const app = express();

app.use(express.json());
app.use(cookieParser());

const corsOptions = {
  origin: [
    'http://localhost:4000'
  ],
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization', 'Accept'],
}

const swaggerDocument = JSON.parse(
  fs.readFileSync(path.resolve("./ricaldone-6ca-PartPlus-1.0.0-resolved.json"), "utf-8")
)
 
 
app.use(cors(corsOptions))
app.use(express.json())
 
 
app.use("/api/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument))

app.use("/api/clientes", clientesRoutes);
app.use("/api/reservas", reservasRoutes);

export default app;
