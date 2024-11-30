import express from "express";
import mongoose from "mongoose";
import { datesmodels } from "./datesmodels.js";
import { AnswerModels } from "./AnswersModels.js";
import cors from "cors";


// Conexión a MongoDB
mongoose.connect("mongodb://localhost:27017/questionnairesFusion", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Conexión de base de datos exitosa");
  })
  .catch((error) => {
    console.error("Error al conectar con la base de datos:", error);
  });
  const app = express();

  app.use(express.json());
  app.use(cors());
  app.get("/",(req, res)=> {
    res.send("Hola desde mi servidor!")
  });

//app.get
app.get("/get-date", async (req, res) => {
  try {
    // Recuperar todas las respuestas de la base de datos
    const allAnswers = await datesmodels.find();

    // Si no hay respuestas, responder con un mensaje apropiado
    if (allAnswers.length === 0) {
      return res.status(404).json({ msg: "No hay respuestas almacenadas" });
    }

    // Responder con los datos recuperados de la base de datos
    return res.status(200).json(allAnswers);
  } catch (error) {
    console.error("Error al recuperar los datos:", error);
    return res.status(500).json({
      msg: "Hubo un problema al recuperar los datos. Intenta más tarde.",
    });
  }
});

// Ruta para crear un documento en la base de datos
app.post("/save-answers", async (req, res) => {
  console.log(req.body)
  //Arreglo del 1 al 12
  const numberOfQuestions = Array.from((Array(12).keys)) //const es una constante
  let flag = true; //Es una variable que puede variar por eso se usa let
  for (const nQ of numberOfQuestions){
    console.log("nQ")
    if(!req.body[`pregunta_${nQ}`]){
      flag = false;
    }
  }
    if (!flag){
      return res.status(400).json({msg:"Datos incompletos"})
    }
  

  try {
    await AnswerModels.create(req.body);
    return res.status(200).json({ msg: "Datos almacenados con exito"})
  } catch (error) {
    return res.status(500).json({ msg: "Algo salio mal al guardar las respuestas"})
  }
})


// Inicio del servidor
app.listen(4000, () => {
  console.log("¡Servidor en línea en el puerto 4000!");
});
