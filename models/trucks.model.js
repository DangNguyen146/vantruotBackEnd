const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Define collection and schema for Business
let Truck = new Schema(
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
    collection: "trucks",
  }
);

module.exports = mongoose.model("trucks", Truck);
