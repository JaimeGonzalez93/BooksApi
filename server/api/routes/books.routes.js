import express from "express";
import {getAllBooks, getBookByGenre, getBookByID, getBookByTitle, getBookByWriter, getBookByYear} from "../controllers/books.controllers.js"
import { createBook } from "../controllers/books.controllers.js";

const router = express.Router();

router.get ("/", getAllBooks);
router.post ("/create", createBook);
router.get ("/:bookID", getBookByID);
router.get ("/bookByTitle/:title", getBookByTitle);
router.get ("/bookByWriter/:writer", getBookByWriter);
router.get ("/bookByYear/:year", getBookByYear);
router.get ("/bookByGenre/:genre", getBookByGenre);

export {router as booksRoutes};