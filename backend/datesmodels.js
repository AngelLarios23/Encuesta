import { Schema, model } from "mongoose";

const DatesSchema = new Schema({
    respuesta1: {
        type: String,
        required: true
    },
    respuesta2: {
        type: String,
        required: true
    },
    respuesta3: {
        type: String,
        required: true
    },
    respuesta4: {
        type: String,
        required: true
    },
    respuesta5: {
        type: String,
        required: true
    },
    respuesta6: {
        type: String,
        required: true
    }
});


export const datesmodels = model("dates", DatesSchema);// Exportar el modelo
