import express from "express";
import { deletePublisher, editPublisher, getAllPublishers, getPublisherByID, getPublisherByLocation, getPublisherByName } from "../controllers/publisher.controller.js";
import { createPublisher } from "../controllers/publisher.controller.js";
import { isAuth } from "../../middlewares/auth.middleware.js";
const router = express.Router ();

router.get ("/", [isAuth],getAllPublishers);
router.post ("/create", [isAuth],createPublisher);
router.get ("/publisherByID/:publisherID", [isAuth],getPublisherByID);
router.get ("/publisherByLocation/:location", [isAuth],getPublisherByLocation);
router.get ("/publisherByName/:name", [isAuth],getPublisherByName);
router.put ("/modify/:publisherID", [isAuth],editPublisher);
router.delete("/delete/:publisherID", [isAuth],deletePublisher);

export {router as publisherRoutes};