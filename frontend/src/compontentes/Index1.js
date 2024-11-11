import express from "express";
import mongoose from "mongoose";
import { datesmodels } from "./datesmodels.js"; // Asegúrate de que este archivo esté bien configurado
import 'bootstrap/dist/css/bootstrap.min.css';

const app = express();
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/integradora", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log("Conexión a MongoDB establecida");
})
.catch((error) => {
  console.error("Error de conexión a MongoDB:", error);
});

app.get("/", (req, res) => {
  res.send("Hola desde mi servidor");
});

app.post("/create", async (req, res) => {
  const { respuesta1, respuesta2, respuesta3, respuesta4, respuesta5, respuesta6 } = req.body;

  if (!respuesta1 || !respuesta2 || !respuesta3 || !respuesta4 || !respuesta5 || !respuesta6) {
    return res.status(400).json({
      msg: "Necesitamos todos los datos",
    });
  }

  const obj = {
    respuesta1,
    respuesta2,
    respuesta3,
    respuesta4,
    respuesta5,
    respuesta6,
  };

  try {
    await datesmodels.create(obj);
    return res.status(200).json({
      msg: "Citas exitosas",
    });
  } catch (error) {
    return res.status(500).json({
      msg: "Error al crear la cita",
      error,
    });
  }
});

app.get("/drop", async (req, res) => {
  try {
    const data = await datesmodels.find();
    return res.json(data);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.listen(4000, () => {
  console.log("Servidor en línea en el puerto 4000");
});
