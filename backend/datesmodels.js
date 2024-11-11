import { Schema,model } from "mongoose";

const DatesSchema = new Schema({
    respuesta1:{
        type:String,
        requiere:true
    },
    respuesta2:{
        type:Number,
        requiere:true
    },
    respuesta3:{
        type:String,
        requiere:true
    },
    respuesta4:{
        type:String,
        requiere:true
    },
    respuesta5:{
        type:String,
        requiere:true
    },
    respuesta6:{
        type:String,
        requiere:true
    }

})

export const datesmodels = model("dates", DatesSchema)