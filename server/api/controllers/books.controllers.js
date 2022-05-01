import { httpStatusCode } from "../../utils/httpStatusCode.js";
import { Book } from "../models/books.models.js";

const getAllBooks = async (req, res, next) => {
  try {
    const Books = await Book.find();
    return res.json({
      status: 200,
      message: httpStatusCode[200],
      data: { books: Books },
    });
  } catch (error) {
    return next(error);
  }
};

const createBook = async (req, res, next) => {
  try {
    const newBook = new Book({
      title: req.body.title,
      writer: req.body.writer,
      year: req.body.year,
      genre: req.body.genre,
    });

    const newBookDB = await newBook.save();

    return res.json({
      status: 201,
      message: httpStatusCode[201],
      data: { book: newBookDB },
    });
  } catch (error) {
    return next(error);
  }
};

const getBookByID = async (req, res, next) => {
  try {
    const { bookID } = req.params;
    const bookByID = await Book.findById(bookID);

    return res.json({
      status: 200,
      message: httpStatusCode[200],
      data: { books: bookByID },
    });
  } catch (error) {
    return next(error);
  }
};

const getBookByTitle = async (req, res, next) => {
  const {title} = req.params;

  try {
      const bookByTitle = await Book.find ({title, title});

      return res.json ({
          status:200,
          message: httpStatusCode[200],
          data: {books: bookByTitle},
      });
  } catch (error) {
      return next(error);
  }
};

const getBookByWriter = async (req, res, next) => {
  const { writer } = req.params;

  try {
    const bookByWriter = await Book.find({ writer, writer });

    return res.json({
      status: 200,
      message: httpStatusCode[200],
      data: { books: bookByWriter },
    });
  } catch (error) {
    return next(error);
  }
};

const getBookByYear = async (req, res, next) => {
  const {year} = req.params;

  try {
      const bookByYear = await Book.find ({year, year});

      return res.json ({
          status:200,
          message: httpStatusCode[200],
          data: {books: bookByYear},
      });
  } catch (error) {
      return next(error);
  }
};

const getBookByGenre = async (req, res, next) => {
  const {genre} = req.params;

  try {
      const bookByGenre = await Book.find ({genre, genre});

      return res.json ({
          status:200,
          message: httpStatusCode[200],
          data: {books: bookByGenre},
      });
  } catch (error) {
      return next(error);
  }
};
export {
  getAllBooks,
  createBook,
  getBookByID,
  getBookByTitle,
  getBookByWriter,
  getBookByYear,
  getBookByGenre,
};
