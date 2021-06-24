const Decks = require("../models/decks.model");
const Trucks = require("../models/trucks.model");
const Wheels = require("../models/wheels.model");

class groupController {
  async trucksRoute(req, res) {
    Trucks.find(function (err, trucks) {
      if (err) {
        console.log(err);
      } else {
        res.json(trucks);
      }
    });
  }
  async trucksRouteSeacrch(req, res) {
    let id = req.params.id;
    Trucks.findById(id, function (err, item) {
      res.json(item);
    });
  }
  async decksRoute(req, res) {
    Decks.find(function (err, trucks) {
      if (err) {
        console.log(err);
      } else {
        res.json(trucks);
      }
    });
  }
  async decksRouteSeacrch(req, res) {
    let id = req.params.id;
    Decks.findById(id, function (err, item) {
      res.json(item);
    });
  }
  async wheelsRoute(req, res) {
    Wheels.find(function (err, trucks) {
      if (err) {
        console.log(err);
      } else {
        res.json(trucks);
      }
    });
  }
  async wheelsRouteSeacrch(req, res) {
    let id = req.params.id;
    Wheels.findById(id, function (err, item) {
      res.json(item);
    });
  }
}

module.exports = new groupController();
