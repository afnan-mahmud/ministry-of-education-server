// External Imports
const mongoose = require("mongoose");

const DB =
  "mongodb+srv://afnanmahmud_afif0011:Fahima_01315@ministry-of-education-c.cro5cb7.mongodb.net/board-info?retryWrites=true&w=majority";

// database Initializaiton
const database = () => {
  const connectionParams = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };

  try {
    mongoose.connect(DB, connectionParams);
    console.log("Db connected successfully");
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  database,
};
