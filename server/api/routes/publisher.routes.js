import express from "express";
import { deletePublisher, editPublisher, getAllPublishers, getPublisherByID, getPublisherByLocation, getPublisherByName } from "../controllers/publisher.controller.js";
import { createPublisher } from "../controllers/publisher.controller.js";

const router = express.Router ();

router.get ("/", getAllPublishers);
router.post ("/create", createPublisher);
router.get ("/publisherByID/:publisherID", getPublisherByID);
router.get ("/publisherByLocation/:location",getPublisherByLocation);
router.get ("/publisherByName/:name", getPublisherByName);
router.put ("/modify/:publisherID", editPublisher);
router.delete("/delete/:publisherID", deletePublisher);

export {router as publisherRoutes};