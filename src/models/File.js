import fileUpload from "express-fileupload";
import { Schema, model } from "mongoose";


const fileSchema = Schema ({

    title: {
        type: String,
        trim: true
    },
    description: String,
    status: {
        type: Boolean,
        default: false
    },
    file: Buffer

},{
    timestamps: true,
    versionKey: false
})

export default model ('File', fileSchema);