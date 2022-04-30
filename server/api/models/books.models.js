import mongoose from "mongoose";

const Schema = mongoose.Schema;

const bookSchema = new Schema ({
    title: {type: String, required: true},
    writer: {type: String, required: true},
    year: {type: Number, required: true},
    genre: {type: String, required: true}
});

const Book = mongoose.model("book", bookSchema);

export {Book};