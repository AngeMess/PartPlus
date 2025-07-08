/* Cliente:
    name: String
    email: String
    password: String
    phone: String
    age: Number
*/
import { Schema, model } from "mongoose";

const clienteSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "El nombre es obligatorio"],
      minlength: [3, "El nombre debe tener al menos 3 caracteres"],
    },
    email: {
      type: String,
      required: [true, "El correo electrónico es obligatorio"],
      unique: true,
      match: [
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        "Por favor, ingresa un correo electrónico válido",
      ],
    },
    password: {
      type: String,
      required: [true, "La contraseña es obligatoria"],
      minlength: [6, "La contraseña debe tener al menos 6 caracteres"],
    },
    phone: {
      type: String,
      required: [true, "El teléfono es obligatorio"],
      match: [
        /^[0-9]{8}$/,
        "El teléfono debe tener 8 dígitos numéricos",
      ],
    },
    age: {
      type: Number,
      required: [true, "La edad es obligatoria"],
      min: [18, "La edad debe ser al menos 18 años"],
    },
  },
  {
    timestamps: true,
    strict: false, 
  }
);

export default model("cliente", clienteSchema);
