import express from "express";
import mongoose from "mongoose";
import {datesmodels} from "./datesmodels.js"


const  app = express();
app.use(express.json())
mongoose.connect("mongodb://localhost:27017/integradora").then(()=>{
    console.log("conexion")
})




app.get("/",(req, res )=>{
    res.send("Hola desde mi servidor")
});

app. post("/create",(req,res)=>{
            const respuesta1 = req.body.respuesta1;
            const respuesta2 = req.body.respuesta2;
            const respuesta3 = req.body.respuesta3;
            const respuesta4 = req.body.respuesta4;
            const respuesta5 = req.body.respuesta5;
            const respuesta6 = req.body.respuesta6;
        if (!respuesta1 || !respuesta2 || !respuesta3 || !respuesta4 || !respuesta5 || !respuesta6){
            return res.status(400).json({
                msg:"nesecitamos todos los datos"
            })
        }
        const obj ={
            respuesta1: respuesta1,
            respuesta2: respuesta2,
            respuesta3: respuesta3,
            respuesta4: respuesta4,
            respuesta5: respuesta5,
            respuesta6: respuesta6
        };
        datesmodels.createo(obj);
        return res.status(200).json({
            msg:"citas exitosas"
        })
})

app.get('/drop',async (req,res)=>{
    try {
        const data = await datesmodels.find();
        return res.json(data)
    } catch (e) {
        res.status(500).send(e);
    }
})
 
app.listen(4000,()=>{
    console.log("servidor en linea!")
})