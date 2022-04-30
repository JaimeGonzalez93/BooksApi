import { httpStatusCode } from "../../utils/httpStatusCode.js";
import { Publisher } from "../models/publisher.models.js";

const getAllPublishers = async (req,res,next) => {
    try {
        const Publishers = await Publisher.find();
        return res.json({
            status: 200,
            message: httpStatusCode[200],
            data: {publisher: Publisher}
        });
    } catch (error) {
        return next (error);
    }
}


const createBook = async (req, res, next) => {
    try {
        const newBook = new Book();
        newBook.title = req.body.title;
        newBook.writer = req.body.writer;
        newBook.year = req.body.year;
        newBook.genre = req.body.genre;

        const newBookDB = await newBook.save();

        return res.json({
            status: 201,
            message: httpStatusCode[201],
            data: {book:newBookDB},
        });
        
    } catch (error) {
        return next (error);
    }
}

export {getAllPublishers};