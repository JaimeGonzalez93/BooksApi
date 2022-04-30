import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const MONGODB = process.env.MONGODB;

const connect =async () => {
    try {
        const DB = await mongoose.connect(MONGODB, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        const {name, host} = DB.connection;
        console.log (`Connected to database ${name} in host : ${host}`);
    } catch(error){
        console.log ("Error connecting to database", error);
    }
};

export {connect};