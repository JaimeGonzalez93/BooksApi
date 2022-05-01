import express from "express";
import { deleteCharacter, editCharacter, getAllCharacters, getCharacterByID, getCharacterByName, getCharacterBySex } from "../controllers/character.controller.js";
import { createCharacter } from "../controllers/character.controller.js";

const router = express.Router();

router.get ("/", getAllCharacters);
router.post ("/create", createCharacter);
router.get ("/:characterID", getCharacterByID);
router.get ("/characterByName/:name", getCharacterByName);
router.get("/characterBySex/:sex", getCharacterBySex);
router.put ("/modify/:characterID", editCharacter);
router.delete ("/delete/:characterID", deleteCharacter);
export {router as characterRoutes};