import { httpStatusCode } from "../../utils/httpStatusCode.js";
import { Publisher } from "../models/publisher.models.js";

const getAllPublishers = async (req, res, next) => {
  try {
    const Publishers = await Publisher.find();
    return res.json({
      status: 200,
      message: httpStatusCode[200],
      data: { publisher: Publishers },
    });
  } catch (error) {
    return next(error);
  }
};

const createPublisher = async (req, res, next) => {
  try {
    const newPublisher = new Publisher({
      name: req.body.name,
      location: req.body.location,
    });

    const newPublisherDB = await newPublisher.save();

    return res.json({
      status: 201,
      message: httpStatusCode[201],
      data: { publisher: newPublisherDB },
    });
  } catch (error) {
    return next(error);
  }
};

const getPublisherByID = async (req, res, next) => {
  try {
    const { publisherID } = req.params;
    const publisherByID = await Publisher.findById(publisherID);

    return res.json({
      status: 200,
      message: httpStatusCode[200],
      data: { publisher: publisherByID },
    });
  } catch (error) {
    return next(error);
  }
};

const getPublisherByLocation = async (req, res, next) => {
  const { location } = req.params;
  try {
    const publisherByLocation = await Publisher.find({ location: location });

    return res.json({
      status: 200,
      message: httpStatusCode[200],
      data: { publisher: publisherByLocation },
    });
  } catch (error) {
    return next(error);
  }
};

const getPublisherByName = async (req, res, next) => {
  const {name} = req.params;
  try {
    const publisherByName = await Publisher.find({name: name});

    return res.json ({
      status: 200,
      message: httpStatusCode[200],
      data: {publisher: publisherByName},
    })
  } catch (error) {
    return next(error);
  }
}

const editPublisher = async (req, res, next) => {
  try {
    const {publisherID} = req.params;
  const publisherModify = new Publisher(req.body);

  publisherModify._id = publisherID;

  const publisherUpdated = await Publisher.findByIdAndUpdate(
    publisherID,
    publisherModify
  );
  return res.json ({
    status: 200,
    message: httpStatusCode [200],
    data: publisherUpdated
  });
  } catch (error) {
    return next(error);
  }
}

const deletePublisher = async (req, res, next) => {
  try {
    const {publisherID} = req.params;
    await Publisher.findByIdAndDelete(publisherID);
    return res.json ({
      status:200,
      message: httpStatusCode[200],
      data: `Publisher deleted ${publisherID}`
    });
  } catch (error) {
    return next(error);
  }
}
export {
  getAllPublishers,
  createPublisher,
  getPublisherByID,
  getPublisherByLocation,
  getPublisherByName,
  editPublisher,
  deletePublisher
};
