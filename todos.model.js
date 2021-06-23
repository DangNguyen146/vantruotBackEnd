const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Define collection and schema for Business
let Todo = new Schema(
  {
    textTodo: {
      type: String,
    },
    status: {
      type: String,
    },
    textTask: {
      type: String,
    },
  },
  {
    collection: "todoList",
  }
);

module.exports = mongoose.model("todoList", Todo);
