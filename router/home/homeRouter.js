// External Imports
const express = require("express");

// Internal Imports
const { getBoard } = require("../../controller/boardController");

// Router
const homeRouter = express.Router();

homeRouter.get("/", getBoard);

module.exports = {
  homeRouter,
};
