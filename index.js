import express from "express";
import dotenv from "dotenv";
import {connect} from "./server/config/database.js";

dotenv.config();
const server = express();

connect();

const PORT = process.env.PORT;



server.listen(PORT,() => {
    console.log(`Server running in http://localhost:${PORT}`);
})