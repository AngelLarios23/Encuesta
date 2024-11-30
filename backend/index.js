import express from "express";
import mongoose from "mongoose";
import { datesmodels } from "./datesmodels.js";
import database from "mime-db";
import "bootstrap/dist/css/bootstrap.min.css"
import { createBrowserRouter,RouterProvider} from "react-router-dom";
import cors from cors

const route = createBrowserRouter({
  path:"/",
  Element:<App />
},
 path: "/charts",
 element: <div>Hola desde graficas</div>
)

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
app.post("/save-answers", async (req, res) => {
  console.log(req.body)
  //Arreglo del 1 al 12
  const numberOfQuestions = Array.from((Array(12).keys))
  let flag = true;
  for (nQ of numberOfQuestion){
    if(!req.body[`pregunta_${nQ}`]){
      flag = false;
    }
    if (!flag){
      return res.status(400).json({msg:"Datos incompletos"})
    }
    try {
      await datesmodels.create(req.body)
      return res.status(200).json({msg: "Datos almacenados con exito"})
    } catch (error){
      return res.status(500).json({msg: "Algo salio mal al guardar las respuestas"})
    }

    )
  
    app.get("/get-answers",async(req, res)=>{
    return res.status(200).json(await datesmodels.find())
  })

  /*app.get("/get-answers-to-chart", async (req, res) => {
    const allAnswers = await AnswerModel.find();
    let totalSiempre = 0;
    let totalAVeces = 0;
    let totalRaraVez = 0;
    let totalNunca = 0;

    for (const answer of allAnswers) {
        for (let i = 0; i < 20; i++) {
            const answerPerQuestion = answer[pregunta_${i}];
            if (answerPerQuestion === "Siempre") {
              totalSiempre++
          } else if (answerPerQuestion === "A veces") {
              totalAVeces++
          } else if (answerPerQuestion === "Rara vez") {
              totalRaraVez++
          } else {
              totalNunca++
          }
      }
  }
  return res.status(200).json([
      totalSiempre,
      totalAVeces,
      totalRaraVez,
      totalNunca
  ])
}) */
  app.get("/get-answers-to-chart",async(req, res)=>{
    const allAnswers = await Answermodel.find();
    for(const answers of allAnswers){
      for(const answers of allAnswers){
        for (i = 0; i<20; i++){
          const answerPerQuestion = answers[`pregunta_${i}`];

        /*
        "siempre"
        "A veces"
        "Rara vez"
        "Nunca"
        */
       if (answerPerQuestion === "siempre"){
        totalSiempre++
       } else if (answerPerQuestion ==""){
        
       }
       
        }
      }
    }
  })
  
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
