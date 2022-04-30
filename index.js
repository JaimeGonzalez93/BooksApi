import express from "express";
import dotenv from "dotenv";
import {connect} from "./server/config/database.js";
import {booksRoutes} from "./server/api/routes/books.routes.js";
import {characterRoutes} from "./server/api/routes/character.routes.js";
import {publisherRoutes} from "./server/api/routes/publisher.routes.js";

dotenv.config();
const server = express();

connect();

const PORT = process.env.PORT;

server.use(express.json());
server.use(express.urlencoded({extended:true}));

server.use("/books", booksRoutes);
server.use("/characters", characterRoutes);
server.use("/publishers", publisherRoutes);


server.listen(PORT,() => {
    console.log(`Server running in http://localhost:${PORT}`);
})