const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Define collection and schema for Business
let Deck = new Schema(
  {
    maVan: {
      type: Number,
    },
    tenVan: {
      type: String,
    },
    giaVan: {
      type: String,
    },
    hinhAnh: {
      type: String,
    },
    moTa: {
      type: String,
    },
    danhGia: {
      type: Number,
    },
  },
  {
    collection: "decks",
  }
);

module.exports = mongoose.model("decks", Deck);
