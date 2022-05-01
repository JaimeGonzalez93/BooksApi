import express from "express";
import { getAllCharacters, getCharacterByID, getCharacterByName, getCharacterBySex } from "../controllers/character.controller.js";
import { createCharacter } from "../controllers/character.controller.js";

const router = express.Router();

router.get ("/", getAllCharacters);
router.post ("/create", createCharacter);
router.get ("/:characterID", getCharacterByID);
router.get ("/characterByName/:name", getCharacterByName);
router.get("/characterBySex/:sex", getCharacterBySex);
export {router as characterRoutes};