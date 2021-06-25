const express = require("express");
const router = new express.Router();
const userController = require("../controllers/usersController");

// create user
router.post("/users/signup", userController.createUser);
// login
router.post("/users/login", userController.loginUser);

module.exports = router;
