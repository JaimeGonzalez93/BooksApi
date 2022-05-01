import express from "express";
import {deleteBook, editBook, getAllBooks, getBookByGenre, getBookByID, getBookByTitle, getBookByWriter, getBookByYear} from "../controllers/books.controllers.js"
import { createBook } from "../controllers/books.controllers.js";

const router = express.Router();

router.get ("/", getAllBooks);
router.post ("/create", createBook);
router.get ("/:bookID", getBookByID);
router.get ("/bookByTitle/:title", getBookByTitle);
router.get ("/bookByWriter/:writer", getBookByWriter);
router.get ("/bookByYear/:year", getBookByYear);
router.get ("/bookByGenre/:genre", getBookByGenre);
router.put ("/modify/:bookID", editBook);
router.delete("/delete/:bookID", deleteBook);
export {router as booksRoutes};