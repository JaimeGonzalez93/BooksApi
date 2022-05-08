import express, { application } from "express";
import dotenv from "dotenv";
import { connect } from "./server/config/database.js";
import { booksRoutes } from "./server/api/routes/books.routes.js";
import { characterRoutes } from "./server/api/routes/character.routes.js";
import { publisherRoutes } from "./server/api/routes/publisher.routes.js";
import cors from "cors";
import logger from "morgan";
import { httpStatusCode } from "./server/utils/httpStatusCode.js";
import { writerRoutes } from "./server/api/routes/writer.routes.js";

dotenv.config();
const server = express();

connect();

const PORT = process.env.PORT;

server.set("secretKey", "nodeRestApi");

server.use((req, res, next) => {
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  res.header("Access-Control-Allow-Credentials", true);
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
});

server.use(
  cors({
    origin: ["http://localhost:4000"],
    credentials: true,
  })
);

server.use(express.json());
server.use(express.urlencoded({ extended: true }));

//routes
server.use("/books", booksRoutes);
server.use("/characters", characterRoutes);
server.use("/publishers", publisherRoutes);
server.use("/writers", writerRoutes);

server.use((req, res, next) => {
  let error = new error();
  error.status = 404;
  error.message = httpStatusCode[404];
  next(error);
});

//handle errors
server.use((err, req, res, next) => {
  return res.status(err.status || 500).json(err.message || "Unexpected error");
});
server.disable("x-powered-by");

server.listen(PORT, () => {
  console.log(`Server running in http://localhost:${PORT}`);
});
