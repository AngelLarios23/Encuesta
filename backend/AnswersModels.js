import { Schema, model } from "mongoose";

const AnswerSchema = new Schema({
    respuesta_0: {
        type: String,
        required: true
    },
    respuesta_1: {
        type: String,
        required: true
    },
    respuesta_2: {
        type: String,
        required: true
    },
    respuesta_3: {
        type: String,
        required: true
    },
    respuesta_4: {
        type: String,
        required: true
    },
    respuesta_5: {
        type: String,
        required: true
    },
    respuesta_6: {
        type: String,
        required: true
    },
    respuesta_7: {
        type: String,
        required: true
    },
    respuesta_8: {
        type: String,
        required: true
    },
    respuesta_9: {
        type: String,
        required: true
    },
    respuesta_10: {
        type: String,
        required: true
    },
    respuesta_11: {
        type: String,
        required: true
    }
});

export const AnswerModel = model("answers", AnswerSchema);
