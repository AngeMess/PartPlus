const clientesController = {};
import clientesModel from "../models/cliente.js";

clientesController.getclientes = async (req, res) => {
  const clientes = await clientesModel.find();
  res.json(clientes);
};

clientesController.getclientesById = async (req, res) => {
  const clientes = await clientesModel.findById(req.params.id);
  if (!clientes) {
    return res.status(404).json({ message: "cliente no encontrado" });
  }
  res.json(clientes);
};

clientesController.createclientes = async (req, res) => {
  const { name, email, password, phone, age } = req.body;
  const newclientes = new clientesModel({ name, email, password, phone, age });
  await newclientes.save();
  res.json({ message: "cliente guardado" });
};

clientesController.deleteclientes = async (req, res) => {
const deletedclientes = await clientesModel.findByIdAndDelete(req.params.id);
  if (!deletedclientes) {
    return res.status(404).json({ message: "cliente no encontrado" });
  }
  res.json({ message: "cliente eliminado" });
};

clientesController.updateclientes = async (req, res) => {
  const { name, email, password, phone, age  } = req.body;

  await clientesModel.findByIdAndUpdate(
    req.params.id,
    {
        name, 
        email, 
        password, 
        phone, 
        age
    },
    { new: true }
  );
  res.json({ message: "cliente actualizado" });
};

export default clientesController;