const reservasController = {};
import reservasModel from "../models/reserva.js";

reservasController.getreservas = async (req, res) => {
  const reservas = await reservasModel.find();
  res.json(reservas);
};

reservasController.getreservasById = async (req, res) => {
  const reservas = await reservasModel.findById(req.params.id);
  if (!reservas) {
    return res.status(404).json({ message: "reserva no encontrada" });
  }
  res.json(reservas);
};

reservasController.createreservas = async (req, res) => {
  const { clienteId, vehicle, service, status } = req.body;
  const newreservas = new reservasModel({ clienteId, vehicle, service, status });
  await newreservas.save();
  res.json({ message: "reserva guardada" });
};

reservasController.deletereservas = async (req, res) => {
const deletereservas = await reservasModel.findByIdAndDelete(req.params.id);
  if (!deletereservas) {
    return res.status(404).json({ message: "reserva no encontrada" });
  }
  res.json({ message: "reserva eliminada" });
};

reservasController.updatereservas = async (req, res) => {
  const { clienteId, vehicle, service, status  } = req.body;

  await reservasModel.findByIdAndUpdate(
    req.params.id,
    {
        clienteId, 
        vehicle, 
        service, 
        status
    },
    { new: true }
  );
  res.json({ message: "reserva actualizada" });
};

export default reservasController;