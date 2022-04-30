import express from "express";
import { getAllCharacters } from "../controllers/character.controller.js";

const router = express.Router();

router.get ("/", getAllCharacters);

export {router as characterRoutes};