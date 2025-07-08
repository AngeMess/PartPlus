import express from "express";
import clienteController from "../controllers/clienteController.js";
const router = express.Router();

router
  .route("/")
  .get(clienteController.getclientes)
  .post(clienteController.createclientes);

router
  .route("/:id")
  .put(clienteController.updateclientes)
  .delete(clienteController.deleteclientes);

export default router;