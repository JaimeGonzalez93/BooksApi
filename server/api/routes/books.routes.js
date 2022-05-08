import express from "express";
import {deleteBook, editBook, getAllBooks, getBookByGenre, getBookByID, getBookByTitle, getBookByWriter, getBookByYear} from "../controllers/books.controllers.js"
import { createBook } from "../controllers/books.controllers.js";
import { isAuth } from "../../middlewares/auth.middleware.js";

const router = express.Router();

router.get ("/", [isAuth],getAllBooks);
router.post ("/create", [isAuth],createBook);
router.get ("/:bookID", [isAuth],getBookByID);
router.get ("/bookByTitle/:title", [isAuth],getBookByTitle);
router.get ("/bookByWriter/:writer", [isAuth],getBookByWriter);
router.get ("/bookByYear/:year", [isAuth],getBookByYear);
router.get ("/bookByGenre/:genre", [isAuth],getBookByGenre);
router.put ("/modify/:bookID", [isAuth],editBook);
router.delete("/delete/:bookID", [isAuth],deleteBook)
export {router as booksRoutes};