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
    const newBook = new Book ({
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

export { getAllBooks, createBook };
