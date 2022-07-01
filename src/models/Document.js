import { Schema, model } from "mongoose";


const documentSchema = new Schema ({

    title: String,
    description: String,
    status: String,

},{
    timestamps: true
})

export default model ('Document', documentSchema)