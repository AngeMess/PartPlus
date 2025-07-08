import express from "express";
import reservaController from "../controllers/reservaController.js";
const router = express.Router();

router
  .route("/")
  .get(reservaController.getreservas)
  .post(reservaController.createreservas);

router
  .route("/:id")
  .put(reservaController.updatereservas)
  .delete(reservaController.deletereservas);

export default router;