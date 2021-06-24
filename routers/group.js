const express = require("express");
const router = new express.Router();
const groupController = require("../controllers/groupController");

router.get("/trucks", groupController.trucksRoute);
router.get("/trucks/:id", groupController.trucksRouteSeacrch);
router.get("/decks", groupController.decksRoute);
router.get("/decks/:id", groupController.decksRouteSeacrch);
router.get("/wheels", groupController.wheelsRoute);
router.get("/wheels/:id", groupController.wheelsRouteSeacrch);

module.exports = router;
