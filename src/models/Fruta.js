import { Schema, model } from "mongoose";

const frutasSchema = Schema ({

   nombre: String,
   color: String,
   temporada: Boolean,
   origen: {
    Pais: String,
    Provincia: String,
    year: Number
   }

},{
    timestamps: true,
    versionKey: false
})

export default model ('Fruta', frutasSchema);