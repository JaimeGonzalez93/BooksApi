import express from "express";
import { getAllPublishers } from "../controllers/publisher.controller.js";

const router = express.Router ();

router.get ("/", getAllPublishers);

export {router as publisherRoutes};