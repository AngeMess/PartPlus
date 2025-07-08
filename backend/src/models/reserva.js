/* Reserva:
    clienteId: ObjectID
    vehicle: String
    service: String
    status: String
*/
import { Schema, model } from "mongoose";

const reservaSchema = new Schema(
  {
    clienteId: {
      type: Schema.Types.ObjectId,
      ref: "cliente",
      required: [true, "El cliente es obligatorio"],
    },
    vehicle: {
      type: String,
      required: [true, "El vehículo es obligatorio"],
      minlength: [3, "El nombre del vehículo debe tener al menos 3 caracteres"],
    },
    service: {
      type: String,
      required: [true, "El servicio es obligatorio"],
      enum: {
        values: ["mantenimiento", "limpieza", "reparación", "inspección"],
        message: "{VALUE} no es un servicio válido",
      },
    },
    status: {
      type: String,
      required: [true, "El estado es obligatorio"],
      enum: {
        values: ["pendiente", "confirmada", "cancelada", "completada"],
        message: "{VALUE} no es un estado válido",
      },
    },
  },
  {
    timestamps: true,
    strict: false,
  }
);

export default model("reserva", reservaSchema);