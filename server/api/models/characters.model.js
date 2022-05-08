import mongoose from "mongoose";

const Schema = mongoose.Schema;

const characterSchema = new Schema ({
    name: {type: String, required: true},
    sex: {type: String, required: true},
    book: {type:Schema.Types.ObjectId, ref:"book", required:true},
})

const Character = mongoose.model ("Character", characterSchema);

export {Character};