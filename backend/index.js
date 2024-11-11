import express from "express";
import mongoose from "mongoose";
import { datesmodels } from "./datesmodels.js";

const app = express();
app.use(express.json());

// Conexión a MongoDB
mongoose.connect("mongodb://localhost:27017/integradora", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("Conexión exitosa a MongoDB"))
.catch((error) => console.error("Error de conexión a MongoDB:", error));

// Ruta de bienvenida
app.get("/", (req, res) => {
  res.send("Hola desde mi servidor");
});

// Ruta para crear un documento en la base de datos
app.post("/create", async (req, res) => {
  const { respuesta1, respuesta2, respuesta3, respuesta4, respuesta5, respuesta6, respuesta7, respuesta8, respuesta9, respuesta10,respuesta11, respuesta12, respuesta13 } = req.body;

  if (!respuesta1 || !respuesta2 || !respuesta3 || !respuesta4 || !respuesta5 || !respuesta6 || !respuesta7 || !respuesta8 || !respuesta8 || !respuesta9 || !respuesta10 || !respuesta11 || !respuesta12 || !respuesta13) {
    return res.status(400).json({
      msg: "Necesitamos todos los datos"
    });
  }

  try {
    const obj = {
      respuesta1,
      respuesta2,
      respuesta3,
      respuesta4,
      respuesta5,
      respuesta6,
      respuesta7,
      respuesta8,
      respuesta9,
      respuesta10,
      respuesta11,
      respuesta12,
      respuesta13
    };

    await datesmodels.create(obj);
    return res.status(200).json({
      msg: "Citas exitosas"
    });
  } catch (error) {
    console.error("Error al crear el documento:", error);
    return res.status(500).json({
      msg: "Error al crear el documento"
    });
  }
});

// Inicio del servidor
app.listen(4000, () => {
  console.log("¡Servidor en línea en el puerto 4000!");
});
