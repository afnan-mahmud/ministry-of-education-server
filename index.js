// External Imports
const express = require("express");
const cors = require("cors");
const port = 5000;

// Internal Imports
const { errorHandler } = require("./middlewares/common/errorHandler");
const { database } = require("./database/db");
const { homeRouter } = require("./router/home/homeRouter");
const { carouselRouter } = require("./router/carousel/carouselRouter");

// Initialize Application
const app = express();
app.use(cors());
app.use(express.json());

// Initialize database
database();

// Routing
app.use("/", homeRouter);
app.use("/carousel", carouselRouter);

// Common Error Handler
app.use(errorHandler);

// Port Initialize
app.listen(port, () => {
  console.log(`Listening from port ${port}`);
});
