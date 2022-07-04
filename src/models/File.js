import { Schema, model } from "mongoose";


const fileSchema = new Schema ({

    title: {
        type: String,
        trim: true
    },
    description: String,
    status: {
        type: Boolean,
        default: false
    },

},{
    timestamps: true,
    versionKey: false
})

export default model ('File', fileSchema);