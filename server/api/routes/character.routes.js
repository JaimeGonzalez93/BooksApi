import express from "express";
import { deleteCharacter, editCharacter, getAllCharacters, getCharacterByID, getCharacterByName, getCharacterBySex } from "../controllers/character.controller.js";
import { createCharacter } from "../controllers/character.controller.js";
import { isAuth } from "../../middlewares/auth.middleware.js";

const router = express.Router();

router.get ("/", [isAuth],getAllCharacters);
router.post ("/create", [isAuth],createCharacter);
router.get ("/:characterID", [isAuth],getCharacterByID);
router.get ("/characterByName/:name", [isAuth],getCharacterByName);
router.get("/characterBySex/:sex", [isAuth],getCharacterBySex);
router.put ("/modify/:characterID", [isAuth],editCharacter);
router.delete ("/delete/:characterID", [isAuth],deleteCharacter);
export {router as characterRoutes};