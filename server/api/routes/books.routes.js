import express from "express";
import {getAllBooks} from "../controllers/books.controllers.js"
import { createBook } from "../controllers/books.controllers.js";

const router = express.Router();

router.get ("/", getAllBooks);
router.post ("/create", createBook);


export {router as booksRoutes};