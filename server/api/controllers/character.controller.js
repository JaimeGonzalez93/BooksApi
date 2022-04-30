import { httpStatusCode } from "../../utils/httpStatusCode.js";
import { Character } from "../models/characters.model.js"

const getAllCharacters = async (req,res,next) =>{
    try {
        const Characters = await Character.find();
        return res.json({
            status: 200,
            message: httpStatusCode[200],
            data: {character : Character}
        })
    } catch (error) {
        return next (error);
    }
}

export {getAllCharacters};