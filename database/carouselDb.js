const mongoose = require("mongoose");

const carouselSchema = mongoose.Schema(
  {
    image: {
      type: String,
    },
    title: {
      type: String,
    },
  },
  { collection: "carousel" }
);

const Carousel = mongoose.model("Carousel", carouselSchema);

module.exports = Carousel;
