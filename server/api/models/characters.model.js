import mongoose from "mongoose";

const Schema = mongoose.Schema;

const characterSchema = new Schema ({
    name: {type: String, required: true},
    writer: {type: String, required: true}
})

const Character = mongoose.model ("Character", characterSchema);

export {Character};