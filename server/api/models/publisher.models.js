import mongoose from "mongoose";

const Schema = mongoose.Schema;

const publisherSchema = new Schema ({
    name : {type: String, required: true},
    location: {type: String, required: true}
});

const Publisher = mongoose.model ("Publisher", publisherSchema);

export {Publisher};