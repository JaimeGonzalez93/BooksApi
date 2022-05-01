import { httpStatusCode } from "../../utils/httpStatusCode.js";
import { Character } from "../models/characters.model.js"

const getAllCharacters = async (req,res,next) =>{
    try {
        const Characters = await Character.find();
        return res.json({
            status: 200,
            message: httpStatusCode[200],
            data: {character : Characters}
        })
    } catch (error) {
        return next (error);
    }
};

const createCharacter = async (req, res, next) => {
    try {
        const newCharacter = new Character({
            name: req.body.name,
            sex: req.body.sex,
        });

        const newCharacterDB = await newCharacter.save();

        return res.json({
            status: 201,
            message: httpStatusCode[201],
            data: {character: newCharacterDB},
        })
    } catch (error) {
        return next (error);
    };
}
const getCharacterByID = async (req, res, next) => {
    try {
       const {characterID} = req.params;
       const characterByID = await Character.findById(characterID);
  
  
        return res.json({
          status: 200,
          message: httpStatusCode[200],
          data: { character: characterByID },
        });
      
    } catch (error) {
      return next(error);
    }
  };

const getCharacterByName = async (req, res, next) => {
    const {name} = req.params;
    try {
        const characterByName = await Character.find({name: name});

        return res.json ({
            status: 200,
            message: httpStatusCode[200],
            data: {character : characterByName},
        });
    } catch (error) {
        return next(error);
    }
};

const getCharacterBySex = async (req, res, next) => {
    const {sex} = req.params;

    try {
        const characterBySex = await Character.find ({sex, sex});

        return res.json ({
            status:200,
            message: httpStatusCode[200],
            data: {character: characterBySex},
        })
    } catch (error) {
        return next(error);
    }
}

export {getAllCharacters, createCharacter, getCharacterByID, getCharacterByName, getCharacterBySex};