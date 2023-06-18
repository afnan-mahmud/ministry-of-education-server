const mongoose = require("mongoose");

const boardsSchema = mongoose.Schema(
  {
    name: {
      type: String,
    },
    link: {
      type: String,
    },
  },
  { collection: "boards" }
);

const Boards = mongoose.model("Board", boardsSchema);

module.exports = Boards;
