// External Imports
const express = require("express");

// Internal Imports
const { getCarousel } = require("../../controller/boardController");

// Router
const carouselRouter = express.Router();

carouselRouter.get("/", getCarousel);

module.exports = {
  carouselRouter,
};
