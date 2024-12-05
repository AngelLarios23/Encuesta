import express from "express";
import mongoose from "mongoose";
import { AnswerModel } from "./AnswersModels.js";
import cors from "cors";


// Conexión a MongoDB
mongoose.connect("mongodb://localhost:27017/questionnairesFusion", {
    useNewUrlParser: true,
    useUnifiedTopology: true, //Nuevo motor de manejo de conexiones del mongoDB
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

// Ruta para crear un documento en la base de datos
app.post("/save-answers", async (req, res) => {
  console.log(req.body)
  //Arreglo del 1 al 12
  const numberOfQuestions = Array.from(Array(12).keys()); //const es una constante Array=arreglo
  let flag = true; //Es una variable que puede variar por eso se usa let
  for(const nQ of numberOfQuestions){
    console.log(nQ)
    if(!req.body[`pregunta_${nQ}`]){
      flag = false;
    }
  }
    if (!flag){
      return res.status(400).json({msg:"Datos incompletos"})
    }
  

  try {
    await AnswerModel.create(req.body);
    return res.status(200).json({ msg: "Datos almacenados con exito"})
  } catch (error) {
    return res.status(500).json({ msg: "Algo salio mal al guardar las respuestas"})
  }
})

app.get("/get-answers-to-chart", async(req,res) => {
  const allAnswers = await AnswerModel.find();
  //"Excelente", "Bueno", "Neutro", "Malo"
  let totalExcelente = 0;
  let totalBueno = 0;
  let totalNeutro = 0;
  let totalMalo = 0;
  for(const answers of allAnswers){
    for(let i = 0; i<12; i++){
      const answersPerQuestion = answers[`pregunta_${i}`];
      if(answersPerQuestion === "Excelente"){
        totalExcelente++
      } else if(answersPerQuestion === "Bueno"){
        totalBueno++
      }else if(answersPerQuestion === "Neutro"){
        totalNeutro
      }else if (answersPerQuestion === "malo"){
        totalMalo
      }
    }
  }
  return res.status(200).json([
    totalExcelente,
    totalBueno,
    totalNeutro,
    totalMalo
  ])
})

// Inicio del servidor
app.listen(4000, () => {
  console.log("¡Servidor en línea en el puerto 4000!");
});
