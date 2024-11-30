import { Schema, model } from "mongoose";

const AnswerSchema = new Schema({
    respuesta0: {
        type: String,
        required: true
    },
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
    },
    respuesta7: {
        type: String,
        required: true
    },
    respuesta8: {
        type: String,
        required: true
    },
    respuesta9: {
        type: String,
        required: true
    },
    respuesta10: {
        type: String,
        required: true
    },
    respuesta11: {
        type: String,
        required: true
    }
});

export const AnswerModels = model("answers", AnswerSchema);
