const Boards = require("../database/boardsDb");
const Carousel = require("../database/carouselDb");

async function getBoard(req, res, next) {
  try {
    const boards = await Boards.find();
    res.status(200).json({
      boards,
    });
  } catch (err) {
    console.log(err);
  }
}

async function getCarousel(req, res, next) {
  try {
    const boards = await Carousel.find();
    res.status(200).json({
      boards,
    });
  } catch (err) {
    console.log(err);
  }
}

module.exports = {
  getBoard,
  getCarousel,
};
