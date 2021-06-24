const User = require("../models/user");
// const nodeMailer = require("nodemailer");
// const sendEmail = require("../utils/email/sendEmail");
// const jwt = require("jsonwebtoken");
// const crypto = require("crypto");
// const bcrypt = require("bcryptjs");

class userController {
  async createUser(req, res) {
    const user = new User(req.body);
    try {
      await user.save();
      const token = await user.generateAuthToken();
      res.status(200).json({ message: "Success", token });
    } catch (e) {
      res.status(400).send(e);
    }
  }
  //login
  async loginUser(req, res) {
    try {
      const user = await User.findByCredentials(
        req.body.taiKhoan,
        req.body.matKhau
      );
      const token = await user.generateAuthToken();
      res.status(200).json({ message: "Logged in!", token });
    } catch (e) {
      res.status(400).json({ error: "Cant login!" });
    }
  }
}

module.exports = new userController();
